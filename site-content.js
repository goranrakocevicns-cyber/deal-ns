const dealDb=window.supabase.createClient('https://qfkfglciujegnyflebjh.supabase.co','sb_publishable_2ujRYSmQf43wt10vQikHKQ_9wQj79sN');
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function photoUrl(path){return dealDb.storage.from('deal-ns-images').getPublicUrl(path).data.publicUrl}
function fallbackDealData(){return window.DEAL_FALLBACK||{references:[],gallery:[]}}
// FALLBACK TEST BRANCH: namerno preskace Supabase i localStorage da proveri nezavisni GitHub backup.
async function loadDealData(){console.warn('FALLBACK TEST: Supabase i localStorage su namerno preskoceni.');return fallbackDealData()}
function refCard(x){const image=x.cover||x.images?.[0]||'';return `<a class="reference-card${image?'':' no-image'}" href="reference.html?id=${encodeURIComponent(x.id)}">${image?`<img src="${esc(image)}" alt="${esc(x.title)}">`:''}<div><h3>${esc(x.title)}</h3>${x.short?`<p>${esc(x.short)}</p>`:''}<span>Više o projektu →</span></div></a>`}
async function renderHomeReferences(){const el=document.getElementById('reference-list');if(!el)return;const d=await loadDealData();el.innerHTML=d.references.length?d.references.slice().reverse().map(refCard).join(''):'<div class="reference-empty"><strong>Reference uskoro.</strong><p>Ovde će biti objavljeni izvedeni projekti DEAL NS.</p></div>'}
renderHomeReferences();