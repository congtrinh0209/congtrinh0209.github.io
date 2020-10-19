pdf_table_extractor_progress=function(t){},pdf_table_extractor=function(t){var e=t.numPages,h={pageTables:[]};h.numPages=e,h.currentPages=0;for(var L=function(t,e){return[t[0]*e[0]+t[1]*e[2]+e[4],t[0]*e[1]+t[1]*e[3]+e[5]]},r=Promise.resolve(),i=function(o){return t.getPage(o).then(function(t){var T=[],N=[],A={},C={},B=[1,0,0,1,0,0],G=[];return t.getOperatorList().then(function(t){var e={},r=[];for(var i in PDFJS.OPS)r[PDFJS.OPS[i]]=i;for(var n,o,h=[];t.fnArray.length;){var l=t.fnArray.shift(),s=t.argsArray.shift();if(PDFJS.OPS.constructPath==l)for(;s[0].length;)(i=s[0].shift())==PDFJS.OPS.rectangle?(x=s[1].shift(),y=s[1].shift(),width=s[1].shift(),height=s[1].shift(),Math.min(width,height)<2&&h.push({y:y,x:x,width:width,height:height,transform:B})):i==PDFJS.OPS.moveTo?(a=s[1].shift(),f=s[1].shift()):i==PDFJS.OPS.lineTo&&(x=s[1].shift(),y=s[1].shift(),a==x?h.push({y:Math.min(y,f),x:x-lineWidth/2,width:lineWidth,height:Math.abs(y-f),transform:B}):f==y&&h.push({x:Math.min(x,a),y:y-lineWidth/2,height:lineWidth,width:Math.abs(x-a),transform:B}),a=x,f=y);else PDFJS.OPS.save==l?G.push(B):PDFJS.OPS.restore==l?B=G.pop():PDFJS.OPS.transform==l?(o=s,B=[(n=B)[0]*o[0]+n[2]*o[1],n[1]*o[0]+n[3]*o[1],n[0]*o[2]+n[2]*o[3],n[1]*o[2]+n[3]*o[3],n[0]*o[4]+n[2]*o[5]+n[4],n[1]*o[4]+n[3]*o[5]+n[5]]):PDFJS.OPS.setStrokeRGBColor==l?s:PDFJS.OPS.setFillRGBColor==l?s:PDFJS.OPS.setLineWidth==l?lineWidth=s[0]:0<=["eoFill"].indexOf(r[l])||void 0===e[l]&&(e[l]=r[l])}h=h.map(function(t){var e=L([t.x,t.y],t.transform),r=L([t.x+t.width,t.y+t.height],t.transform);return{x:Math.min(e[0],r[0]),y:Math.min(e[1],r[1]),width:Math.abs(e[0]-r[0]),height:Math.abs(e[1]-r[1])}}),edges1=JSON.parse(JSON.stringify(h)),edges1.sort(function(t,e){return t.x-e.x||t.y-e.y}),edges2=JSON.parse(JSON.stringify(h)),edges2.sort(function(t,e){return t.y-e.y||t.x-e.x});for(var a=null,f=null,g=0,d=[],u=function(t,e,r){for(var i=!1,n=0;n<t.length;n++)if(!(t[n].bottom<e||t[n].top>r))return i=!0,e=Math.min(t[n].top,e),r=Math.max(t[n].bottom,r),new_lines=[],1<n&&(news_lines=t.slice(0,n-1)),new_lines=new_lines.concat(t.slice(n+1)),t=new_lines,u(t,e,r);return i||t.push({top:e,bottom:r}),t};edge=edges1.shift();)2<edge.width||((null===a||2<edge.x-a)&&(2<g&&(d=u(d,f,f+g)),null!==a&&d.length&&T.push({x:a,lines:d}),a=edge.x,f=edge.y,g=0,d=[]),Math.abs(f+g-edge.y)<10?g=edge.height+edge.y-f:(2<g&&(d=u(d,f,f+g)),f=edge.y,g=edge.height));if(2<g&&(d=u(d,f,f+g)),null===a||0==d.length)return{};T.push({x:a,lines:d}),f=a=null;for(var c=0,w=function(t,e,r){for(var i=!1,n=0;n<t.length;n++)if(!(t[n].right<e||t[n].left>r))return i=!0,e=Math.min(t[n].left,e),r=Math.max(t[n].right,r),new_lines=[],1<n&&(news_lines=t.slice(0,n-1)),new_lines=new_lines.concat(t.slice(n+1)),t=new_lines,w(t,e,r);return i||t.push({left:e,right:r}),t};edge=edges2.shift();)2<edge.height||((null===f||2<edge.y-f)&&(2<c&&(d=w(d,a,a+c)),null!==f&&d.length&&N.push({y:f,lines:d}),a=edge.x,f=edge.y,c=0,d=[]),Math.abs(a+c-edge.x)<10?c=edge.width+edge.x-a:(2<c&&(d=w(d,a,a+c)),a=edge.x,c=edge.width));if(2<c&&(d=w(d,a,a+c)),null===f||0==d.length)return{};N.push({y:f,lines:d});var p=function(t,e){for(var r=0;r<e.length;r++)if(Math.abs(e[r]-t)<5)return r;return-1};x_list=T.map(function(t){return t.x});for(var _=N.map(function(t){return t.y}).sort(function(t,e){return e-t}),b=T.map(function(t){return t.lines[0].bottom}).sort().reverse()[0],m=T.map(function(t){return t.lines[t.lines.length-1].top}).sort()[0],v=-1==p(m,_)?1:0,P=-1==p(b,_)?1:0,S={},O=0;O<N.length-2+v+P;O++){if(hor=N[P+N.length-O-2],d=hor.lines.slice(0),col=p(d[0].left,x_list),0!=col)for(var M=0;M<col;M++)S[[O,M].join("-")]={row:O,col:M,width:1,height:2};for(;line=d.shift();){if(left_col=p(line.left,x_list),right_col=p(line.right,x_list),left_col!=col)for(M=col;M<left_col;M++)S[[O,M].join("-")]={row:O,col:M,width:1,height:2};col=right_col}if(col!=T.length-1+v)for(M=col;M<T.length-1+v;M++)S[[O,M].join("-")]={row:O,col:M,width:1,height:2}}for(;;){var J=!1;for(var F in S){if(void 0!==S[k=[(j=S[F]).row+j.height-1,j.col+j.width-1].join("-")]){S[F].height+=S[k].height-1,delete S[k],J=!0;break}}if(!J)break}var D={};for(M=0;M<T.length-2;M++){if(ver=T[M+1],d=ver.lines.slice(0),row=p(d[0].bottom,_)+P,0!=row)for(O=0;O<row;O++)D[[O,M].join("-")]={row:O,col:M,width:2,height:1};for(;line=d.shift();){if(top_row=p(line.top,_),-1==top_row?top_row=_.length+P:top_row+=P,bottom_row=p(line.bottom,_)+P,bottom_row!=row)for(O=bottom_row;O<row;O++)D[[O,M].join("-")]={row:O,col:M,width:2,height:1};row=top_row}if(row!=N.length-1+P+v)for(O=row;O<N.length-1+P+v;O++)D[[O,M].join("-")]={row:O,col:M,width:2,height:1}}for(v&&N.unshift({y:m,lines:[]}),P&&N.push({y:b,lines:[]});;){J=!1;for(var F in D){var j,k;if(void 0!==D[k=[(j=D[F]).row+j.height-1,j.col+j.width-1].join("-")]){D[F].width+=D[k].width-1,delete D[k],J=!0;break}}if(!J)break}for(var W in A=S,D)void 0!==A[W]?A[W].width=D[W].width:A[W]=D[W];for(var W in A)for(M=0;M<A[W].width;M++)for(O=0;O<A[W].height;O++)0==M&&0==O||delete A[[O+A[W].row,M+A[W].col].join("-")];for(var W in C={},A)for(M=0;M<A[W].width;M++)for(O=0;O<A[W].height;O++)0==O&&0==M||(C[[A[W].row+O,A[W].col+M].join("-")]=[A[W].row,A[W].col].join("-"))}).then(function(){return t.getTextContent().then(function(t){tables=[],table_pos=[];for(var e=0;e<N.length-1;e++){tables[e]=[],table_pos[e]=[];for(var r=0;r<T.length-1;r++)tables[e][r]="",table_pos[e][r]=null}for(;item=t.items.shift();){x=item.transform[4],y=item.transform[5];var i=-1;for(e=0;e<T.length-1;e++)if(x>=T[e].x&&x<T[e+1].x){i=e;break}if(-1!=i){var n=-1;for(e=0;e<N.length-1;e++)if(y>=N[e].y&&y<N[e+1].y){n=N.length-e-2;break}-1!=n&&(void 0!==C[n+"-"+i]&&(id=C[n+"-"+i],n=id.split("-")[0],i=id.split("-")[1]),null!==table_pos[n][i]&&5<Math.abs(table_pos[n][i]-y)&&(tables[n][i]+="\n"),table_pos[n][i]=y,tables[n][i]+=item.str)}}tables.length&&h.pageTables.push({page:o,tables:tables,merges:A,merge_alias:C,width:T.length-1,height:N.length-1}),h.currentPages++,"function"==typeof pdf_table_extractor_progress&&pdf_table_extractor_progress(h)})})})},n=1;n<=e;n++)r=r.then(i.bind(null,n));return r.then(function(){return h})};