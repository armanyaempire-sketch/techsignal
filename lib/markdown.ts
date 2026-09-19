function esc(v:string){return v.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");}
function inline(v:string){
  let x=esc(v);
  x=x.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
  x=x.replace(/\*(.+?)\*/g,"<em>$1</em>");
  x=x.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g,(_,label,url)=>{
    if(url.startsWith("/"))return '<a href="'+url+'">'+label+"</a>";
    return '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+"</a>";
  });
  return x;
}
function isTableSeparator(line:string){
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}
function splitTableRow(line:string){
  const value=line.trim().replace(/^\|/,"").replace(/\|$/,"");
  return value.split("|").map(cell=>cell.trim());
}
export function markdownToHtml(md:string){
  const lines=md.replace(/\r\n/g,"\n").split("\n");
  const out:string[]=[];let p:string[]=[];let list:"ul"|"ol"|null=null;
  const fp=()=>{if(p.length)out.push("<p>"+p.join(" ").trim()+"</p>");p=[]};
  const fl=()=>{if(!list)return;out.push(list==="ul"?"</ul>":"</ol>");list=null;};
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    const next=lines[i+1]??"";
    if(line.includes("|")&&next&&isTableSeparator(next)){
      fp();fl();
      const header=splitTableRow(line);
      const rows:string[][]=[];
      i+=2;
      while(i<lines.length&&lines[i].trim()&&lines[i].includes("|")){
        rows.push(splitTableRow(lines[i]));
        i++;
      }
      i--;
      const count=header.length;
      out.push("<div class=\"table-wrap\"><table><thead><tr>"+header.map(x=>"<th scope=\"col\">"+inline(x)+"</th>").join("")+"</tr></thead><tbody>"+
        rows.map(row=>"<tr>"+Array.from({length:count},(_,j)=>"<td>"+inline(row[j]??"")+"</td>").join("")+"</tr>").join("")+
        "</tbody></table></div>");
      continue;
    }
    if(!line.trim()){fp();fl();continue;}
    if(/^###\s+/.test(line)){fp();fl();out.push("<h3>"+inline(line.replace(/^###\s+/,""))+"</h3>");continue;}
    if(/^##\s+/.test(line)){fp();fl();out.push("<h2>"+inline(line.replace(/^##\s+/,""))+"</h2>");continue;}
    if(/^#\s+/.test(line)){fp();fl();out.push("<h2>"+inline(line.replace(/^#\s+/,""))+"</h2>");continue;}
    if(/^>\s?/.test(line)){fp();fl();out.push("<blockquote>"+inline(line.replace(/^>\s?/,""))+"</blockquote>");continue;}
    if(/^[-*]\s+/.test(line)){fp();if(list!=="ul"){fl();out.push("<ul>");list="ul"}out.push("<li>"+inline(line.replace(/^[-*]\s+/,""))+"</li>");continue;}
    if(/^\d+\.\s+/.test(line)){fp();if(list!=="ol"){fl();out.push("<ol>");list="ol"}out.push("<li>"+inline(line.replace(/^\d+\.\s+/,""))+"</li>");continue;}
    p.push(inline(line.trim()));
  }
  fp();fl();return out.join("\n");
}
