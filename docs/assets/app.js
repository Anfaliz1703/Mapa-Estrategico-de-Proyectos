const COLORS={
  educacion:'#22c55e',recursos:'#3b82f6',marca:'#ec4899',software:'#f59e0b',formacion:'#eab308',vida:'#14b8a6',consultoria:'#8b5cf6'
};
const AREAS={
  educacion:{name:'Educación institucional',icon:'ph-chalkboard-teacher',filter:'educacion',x:50,y:13,color:COLORS.educacion},
  recursos:{name:'Recursos con IA',icon:'ph-robot',filter:'recursos',x:18,y:36,color:COLORS.recursos},
  marca:{name:'Marca personal',icon:'ph-megaphone',filter:'monetizacion',x:82,y:38,color:COLORS.marca},
  software:{name:'Software & IA',icon:'ph-code',filter:'software',x:22,y:70,color:COLORS.software},
  formacion:{name:'Formación',icon:'ph-graduation-cap',filter:'formacion',x:50,y:86,color:COLORS.formacion},
  vida:{name:'Vida personal',icon:'ph-heart',filter:'vida-personal',x:78,y:72,color:COLORS.vida},
  consultoria:{name:'Consultoría',icon:'ph-briefcase',filter:'consultoria',x:8,y:55,color:COLORS.consultoria}
};
const projects=[
{id:'docencia-ie-el-recreo',name:'Docencia IE El Recreo',area:'educacion',categories:['educacion','institucional','evaluacion','planeacion','feria'],status:'Activo permanente',priority:'Alta',progress:78,pending:6,icon:'ph-chalkboard-teacher',objective:'Trabajo principal: clases, planeaciones, notas, asistencias, controles diarios, desempeños, ESTEMBRANDO, CafeTech, CafeSec, feria, malla, plan curricular y actas.',next:'Crear tablero por grado, materia, evidencia pendiente y notas mínimas.',subs:['ESTEMBRANDO','CafeTech','CafeSec','Feria de Ciencia y Tecnología','Seguimiento de notas y evidencias'],pain:['Cuesta cerrar notas y evidencias','Notificaciones nocturnas fáciles de ignorar']},
{id:'recursos-educativos-ia-tecnologia',name:'Recursos Educativos con IA y Tecnología',area:'recursos',categories:['educacion','ia','recursos','guias','offline'],status:'Activo',priority:'Alta',progress:72,pending:5,icon:'ph-books',objective:'Guías PDF, HTML offline, Cornell, laboratorios virtuales, plantillas, rúbricas y apps de clase.',next:'Separar plantillas maestras, recursos de prueba y recursos listos para publicar.',subs:['Guías HTML','PDF imprimibles','Laboratorios','Rúbricas','Microherramientas'],pain:['Muchas versiones sueltas','Falta plantilla maestra estable']},
{id:'orion-agentes-docentes',name:'ORIÓN · Agentes Docentes',area:'software',categories:['ia','automatizacion','educacion','github','agentes','software'],status:'Conceptual / en diseño',priority:'Media',progress:28,pending:4,icon:'ph-rocket-launch',objective:'Sistema de agentes: ORIÓN recibe intención, MERLIN genera recursos y SÉNECA valida calidad y coherencia.',next:'Definir un MVP: generar una guía desde formulario y dejarla lista para revisión.',subs:['ORIÓN','MERLIN','SÉNECA','Repositorio de plantillas'],pain:['Puede crecer demasiado','Necesita criterios claros']},
{id:'el-profe-que-aprende',name:'El Profe Que Aprende',area:'marca',categories:['marca-personal','monetizacion','educacion','contenido','recursos'],status:'Activo estratégico',priority:'Alta',progress:46,pending:7,icon:'ph-megaphone',objective:'Marca educativa, contenido, comunidad, recursos, blogs, sitio web y monetización.',next:'Crear un pipeline mínimo: idea, guion, asset, publicación y recurso asociado.',subs:['TikTok/Reels/YouTube/Facebook','elprofequeaprende.com','Generador autónomo de recursos','Kits digitales'],pain:['Rentable, pero consume tiempo','Falta sistema realista']},
{id:'sinapsis-lighthouse',name:'Sinapsis / Lighthouse',area:'educacion',categories:['educacion','formacion-privada','emprendimiento','estudiantes','programacion'],status:'En operación',priority:'Alta',progress:67,pending:5,icon:'ph-brain',objective:'Clases infantiles y juveniles, convenio Lighthouse, Scratch, Micro:bit, construcción y juegos estudiantiles.',next:'Formalizar ruta por niveles y separar infantil, juvenil y Lighthouse dentro del tablero.',subs:['Infantil tipo Lego','Juveniles Scratch/Micro:bit','Convenio Lighthouse','Juegos: Martín, Samantha, Emanuel y otros'],pain:['Investigar línea infantil Lego','Formalizar niveles, precios y evidencias']},
{id:'plataforma-educativa-integral',name:'Plataforma Educativa Integral',area:'software',categories:['software','educacion','gestion-institucional','convivencia','notas'],status:'Idea avanzada',priority:'Media',progress:15,pending:3,icon:'ph-monitor',objective:'Plataforma simple para notas, asistencia, observaciones, convivencia, comités y consulta de familias.',next:'Definir MVP: notas + asistencia + observaciones básicas antes de convivencia y comités.',subs:['Módulo académico','Módulo convivencial / ORIENTA','Comités','Familias'],pain:['Proyecto grande','Debe ser simple para docentes aversos']},
{id:'formacion-personal-profesional',name:'Formación Personal y Profesional',area:'formacion',categories:['crecimiento','academico','profesional','ingles','doctorado','formacion'],status:'Activo',priority:'Media',progress:55,pending:4,icon:'ph-student',objective:'Doctorado, inglés, IA, eventos, convocatorias, portafolio, ingreso, ascenso y certificaciones.',next:'Crear portafolio cronológico de logros, certificados y participaciones.',subs:['Doctorado','Inglés','IA','Ingreso y ascenso'],pain:['Sobrecarga','Trasnocho','Tensión con vida familiar']},
{id:'vida-familia-sostenibilidad',name:'Vida, Familia y Sostenibilidad',area:'vida',categories:['vida-personal','bienestar','familia','sueno','limites'],status:'Activo permanente',priority:'Alta',progress:62,pending:4,icon:'ph-heart',objective:'Sueño, salud, pareja, Matteo, rutinas familiares, entrenamientos, finanzas y límites de carga.',next:'Crear semáforo de sobrecarga que cruce sueño, pendientes y proyectos activos.',subs:['Rutina de sueño','Organización familiar','Tiempo de pareja','Entrenamientos'],pain:['Los proyectos invaden la noche','El cansancio afecta cierres']},
{id:'tecnologia-automatizacion-experimentacion',name:'Tecnología, Automatización y Experimentación',area:'software',categories:['software','ia','herramientas','automatizacion','pwa'],status:'Activo',priority:'Media',progress:50,pending:5,icon:'ph-cpu',objective:'GitHub, Vercel, MongoDB, PWA, ChatGPT, agentes, MCP, apps, automatizaciones y hardware personal.',next:'Priorizar la PWA Radar Estratégico como interfaz visual del mapa.',subs:['PWA Radar Estratégico','Automatizaciones GitHub','Prototipos educativos','Herramientas de voz'],pain:['Puede dispersar atención','Curiosidad técnica compite con urgencias']},
{id:'consultoria-hr-suite',name:'Consultoría HR Suite / Nómina',area:'consultoria',categories:['consultoria','software','nomina','documentacion'],status:'Ocasional',priority:'Media',progress:40,pending:2,icon:'ph-briefcase',objective:'Revisión técnica, roadmaps, casos puntuales, validación de archivos, reuniones con Víctor y documentación.',next:'Mantenerlo como frente ocasional con límites estrictos.',subs:['Casos de nómina','Roadmaps','Revisión de integridad'],pain:['Puede consumir tiempo','Respetar 2 horas de reunión y 90 minutos de tarea']},
{id:'mapa-estrategico-proyectos',name:'Mapa Estratégico de Proyectos',area:'software',categories:['sistema-personal','automatizacion','visualizacion','software','ia'],status:'En construcción',priority:'Alta',progress:38,pending:6,icon:'ph-radar',objective:'Repositorio, dashboard, bitácora diaria, cierre nocturno, avances, pendientes, decisiones, bloqueos y próximas acciones.',next:'Agregar bitácoras operativas y preparar registro desde cierres diarios.',subs:['GitHub Pages','Hub radial','Tarjetas interactivas','Bitácoras YAML'],pain:['Aún depende de cierre manual','Falta alimentar avances reales']}
];
let state={filter:'todos',query:'',view:'hub',selectedArea:null};
let focusChart=null;
const $=sel=>document.querySelector(sel);
const $$=sel=>Array.from(document.querySelectorAll(sel));
const norm=v=>(v||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
function matchesFilter(p){
  const f=state.filter;
  if(f==='todos')return true;
  if(f==='alta')return p.priority==='Alta';
  if(f==='recursos')return p.area==='recursos'||p.categories.includes('recursos');
  if(f==='formacion')return p.area==='formacion'||p.categories.includes('formacion');
  if(f==='vida-personal')return p.categories.includes('vida-personal')||p.area==='vida';
  if(f==='monetizacion')return p.categories.includes('monetizacion')||p.area==='marca';
  if(f==='ia')return p.categories.includes('ia')||p.categories.includes('agentes');
  if(f==='software')return p.categories.includes('software')||p.area==='software';
  return p.categories.includes(f)||p.area===f;
}
function matchesSearch(p){
  if(!state.query.trim())return true;
  const blob=norm([p.name,p.status,p.priority,p.objective,p.next,p.area,...p.categories,...p.subs,...p.pain].join(' '));
  return blob.includes(norm(state.query));
}
function visibleProjects(){return projects.filter(p=>matchesFilter(p)&&matchesSearch(p));}
function areaStats(area,items=projects){
  const list=items.filter(p=>p.area===area);
  const avg=list.length?Math.round(list.reduce((a,p)=>a+p.progress,0)/list.length):0;
  const pending=list.reduce((a,p)=>a+p.pending,0);
  return {count:list.length,avg,pending};
}
function renderStats(list){
  const avg=list.length?Math.round(list.reduce((a,p)=>a+p.progress,0)/list.length):0;
  $('#stat-total').textContent=list.length;
  $('#stat-progress').textContent=avg+'%';
  $('#stat-high').textContent=list.filter(p=>p.priority==='Alta').length;
  $('#stat-pending').textContent=list.reduce((a,p)=>a+p.pending,0);
}
function renderHub(list){
  const wrap=$('#hubNodes');
  const svg=$('#hubLines');
  wrap.innerHTML='';svg.innerHTML='';
  Object.entries(AREAS).forEach(([key,meta])=>{
    const stats=areaStats(key,list);
    if(!stats.count && state.filter!=='todos')return;
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1','50');line.setAttribute('y1','50');line.setAttribute('x2',meta.x);line.setAttribute('y2',meta.y);line.setAttribute('class','hub-line');line.style.stroke=meta.color;svg.appendChild(line);
    const node=document.createElement('button');
    node.className='area-node '+(state.selectedArea===key?'active':'');
    node.style.setProperty('--x',meta.x+'%');node.style.setProperty('--y',meta.y+'%');node.style.setProperty('--tone',meta.color);node.style.setProperty('--progress',stats.avg+'%');
    node.innerHTML=`<div class="area-top"><div class="area-icon"><i class="ph ${meta.icon}"></i></div><div><h3>${meta.name}</h3><p>${stats.count} proyectos · ${stats.pending} pendientes</p></div></div><div class="area-progress"><span></span></div>`;
    node.addEventListener('click',()=>{setFilter(meta.filter);state.selectedArea=key;render();});
    wrap.appendChild(node);
  });
  const focus=list[0]||projects[0];
  $('#focusName').textContent=focus.name;
  $('#focusProgress').textContent=focus.progress+'%';
  $('#focusNext').textContent=focus.next;
  $('#focusBar').style.setProperty('--progress',focus.progress+'%');
  const quick=$('#quickProjects');quick.innerHTML='';
  list.slice(0,8).forEach(p=>{
    const card=document.createElement('button');card.className='quick-card';card.style.setProperty('--tone',COLORS[p.area]);
    card.innerHTML=`<strong>${p.name}</strong><small>${p.progress}% · ${p.pending} pendientes</small>`;
    card.addEventListener('click',()=>{state.view='cards';syncViewButtons();render();document.getElementById(p.id)?.scrollIntoView({behavior:'smooth',block:'center'});});
    quick.appendChild(card);
  });
  renderChart(list);
}
function renderCards(list){
  const grid=$('#cardsGrid');grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="empty">No hay proyectos que coincidan con el filtro actual.</div>';return;}
  list.forEach(p=>{
    const tone=COLORS[p.area]||'#38bdf8';
    const card=document.createElement('article');
    card.className='project-card';card.id=p.id;card.style.setProperty('--tone',tone);card.style.setProperty('--progress',p.progress+'%');
    card.innerHTML=`
      <div class="project-head">
        <div><div class="project-icon"><i class="ph ${p.icon}"></i></div><h3>${p.name}</h3><p>${AREAS[p.area]?.name||p.area} · ${p.status}</p></div>
        <span class="badge ${p.priority==='Alta'?'high':'medium'}">${p.priority}</span>
      </div>
      <div class="progress-row"><div class="bar"><span></span></div><div class="percent">${p.progress}%</div></div>
      <p>${p.objective}</p>
      <div class="project-meta">${p.categories.slice(0,5).map(c=>`<span class="tag">${c}</span>`).join('')}</div>
      <div class="next-action"><strong>Siguiente acción</strong><p>${p.next}</p></div>
      <details class="details"><summary>Subproyectos y dolores</summary><ul>${p.subs.map(s=>`<li>${s}</li>`).join('')}</ul><ul>${p.pain.map(s=>`<li>${s}</li>`).join('')}</ul></details>`;
    grid.appendChild(card);
  });
}
function renderChart(list){
  const canvas=$('#focusChart');
  if(!window.Chart||!canvas)return;
  const dimensions=['Impacto','Aprendizaje','Ingresos','Sistemas','Bienestar'];
  const vals=[
    avgBy(['educacion','monetizacion'],list),avgBy(['formacion','ia'],list),avgBy(['monetizacion','consultoria'],list),avgBy(['software','ia'],list),avgBy(['vida-personal','bienestar'],list)
  ];
  if(focusChart)focusChart.destroy();
  focusChart=new Chart(canvas,{type:'radar',data:{labels:dimensions,datasets:[{label:'Enfoque',data:vals,fill:true,tension:.3}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{r:{min:0,max:100,ticks:{display:false},grid:{color:'rgba(148,163,184,.22)'},angleLines:{color:'rgba(148,163,184,.22)'},pointLabels:{color:'#cbd5e1',font:{size:11}}}},elements:{line:{borderWidth:2},point:{radius:3}}});
}
function avgBy(cats,list){const arr=list.filter(p=>p.categories.some(c=>cats.includes(c))||cats.includes(p.area));return arr.length?Math.round(arr.reduce((a,p)=>a+p.progress,0)/arr.length):35;}
function render(){
  const list=visibleProjects();
  renderStats(list);renderHub(list);renderCards(list);
  $('#resultLabel').textContent=`${list.length} proyectos visibles`;
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===state.view+'View'));
}
function setFilter(filter){state.filter=filter;state.selectedArea=null;syncFilterButtons();render();}
function syncFilterButtons(){$$('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===state.filter));}
function syncViewButtons(){$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===state.view));}
function copyDailyTemplate(){
  const date=new Date().toISOString().slice(0,10);
  const text=`fecha: "${date}"\nresumen_dia: ""\navances:\n  - proyecto: ""\n    detalle: ""\npendientes:\n  - proyecto: ""\n    detalle: ""\ndecisiones:\n  - proyecto: ""\n    detalle: ""\nbloqueos:\n  - proyecto: ""\n    detalle: ""\nproximos_pasos:\n  - proyecto: ""\n    detalle: ""`;
  navigator.clipboard?.writeText(text).then(()=>toast('Plantilla de cierre copiada. Lista para pegar en la bitácora.')).catch(()=>toast('No pude copiar automáticamente. Usa el cierre nocturno con Jarvis.'));
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3600);}
function boot(){
  $$('.nav button,[data-filter].chip').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
  $$('[data-view]').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;syncViewButtons();render();}));
  $('#search').addEventListener('input',e=>{state.query=e.target.value;render();});
  $('#voiceBtn').addEventListener('click',()=>toast('En el cierre nocturno puedes responder por audio; luego se convierte en avance, pendiente, decisión o bloqueo.'));
  $('#copyTemplate').addEventListener('click',copyDailyTemplate);
  $('#year').textContent=new Date().getFullYear();
  syncFilterButtons();syncViewButtons();render();
}
document.addEventListener('DOMContentLoaded',boot);