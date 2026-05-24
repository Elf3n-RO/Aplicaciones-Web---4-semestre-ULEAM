// ============================================================
// DATOS DE CURSOS
// Cada clave es el ID del curso. Contiene nombre, ícono HTML,
// categoría y cantidad de recursos que tiene el curso.
// ============================================================
const COURSE_DATA = {
  'guitarra':          { name: 'Guitarra para principiantes', icon: '<img src="Imagenes/Guitara.png" alt="Guitarra" width="50">',              category: 'Arte',       resources: 4 },
  'primeros-auxilios': { name: 'Primeros Auxilios',           icon: '<img src="Imagenes/Primeros auxilios.png" alt="Primeros Auxilios" width="45">', category: 'Medicina',   resources: 4 },
  'dibujo':            { name: 'Dibujo artístico',            icon: '<img src="Imagenes/Lapiz.png" alt="Dibujo" width="50">',                  category: 'Arte',       resources: 3 },
  'software':          { name: 'Desarrollo de Software',      icon: '<img src="Imagenes/desarrolloSoftware.png" alt="Software" width="55">',   category: 'Tecnología', resources: 3 },
  'redes':             { name: 'Redes e infraestructura',     icon: '<img src="Imagenes/redes.png" alt="Redes" width="60">',                   category: 'Tecnología', resources: 3 },
};

// ============================================================
// ENLACES DE RECURSOS POR CURSO
// Cada entrada es un array de objetos con:
//   type: 'video' → abre YouTube | 'pdf' → abre/descarga PDF
//   url:  URL de destino
// El índice del array coincide con el índice del recurso en HTML.
// ============================================================
const RESOURCE_LINKS = {
  'guitarra': [
    { type: 'video', url: 'https://www.youtube.com/results?search_query=introduccion+guitarra+postura' },
    { type: 'video', url: 'https://www.youtube.com/results?search_query=acordes+basicos+guitarra+do+re+mi' },
    { type: 'pdf',   url: 'https://www.teoria.com/es/tutoriales/guitarra/00-inicio.php' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=metodo+guitarra+vol+1+pdf+gratis' },
  ],
  'primeros-auxilios': [
    { type: 'video', url: 'https://www.youtube.com/watch?v=qlfwsYRMjSg' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=U3Bjw_2N4f0' },
    { type: 'pdf',   url: 'https://www.maniapurefoundation.org/post/primeros-auxilios-basicos' },
    { type: 'pdf',   url: 'https://www.unirioja.es/servicios/sprl/pdf/manual_primeros_auxilios.pdf' },
  ],
  'dibujo': [
    { type: 'video', url: 'https://www.youtube.com/results?search_query=proporciones+perspectiva+dibujo+tecnico' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=luz+y+sombra+tecnicas+sombreado+dibujo+pdf' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=fundamentos+dibujo+artistico+pdf+gratis' },
  ],
  'software': [
    { type: 'video', url: 'https://www.youtube.com/results?search_query=introduccion+programacion+variables+funciones' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=algoritmia+basica+condicionales+bucles+pdf' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=programacion+python+principiantes+pdf+gratis' },
  ],
  'redes': [
    { type: 'video', url: 'https://www.youtube.com/results?search_query=modelo+OSI+TCP+IP+explicado' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=seguridad+en+redes+firewalls+VPN+pdf' },
    { type: 'pdf',   url: 'https://www.google.com/search?q=administracion+de+redes+guia+practica+pdf' },
  ],
};

// ============================================================
// BANCO DE PREGUNTAS PARA LOS TESTS
// Cada curso tiene un array de preguntas. Cada pregunta tiene:
//   q:       texto de la pregunta
//   opts:    array de 4 opciones de respuesta
//   correct: índice (0-based) de la opción correcta
// ============================================================
const TEST_BANK = {
  'guitarra': [
    { q: '¿Qué es un acorde en guitarra?',                      opts: ['Varias notas tocadas a la vez', 'Una sola nota prolongada', 'El afinador de la guitarra', 'Un tipo de cuerda'],          correct: 0 },
    { q: '¿Cuántas cuerdas tiene una guitarra estándar?',        opts: ['4', '5', '6', '7'],                                                                                                      correct: 2 },
    { q: '¿Qué significa "Do, Re, Mi" en música?',              opts: ['Tipos de guitarras', 'Notas musicales', 'Marcas de guitarra', 'Tipos de acordes'],                                       correct: 1 },
    { q: '¿Qué parte de la guitarra se presiona para cambiar notas?', opts: ['El cuerpo', 'La clavija', 'El traste', 'La boca'],                                                                 correct: 2 },
  ],
  'primeros-auxilios': [
    { q: '¿Qué significa RCP?',                                  opts: ['Rescate Cardíaco Preventivo', 'Reanimación Cardiopulmonar', 'Respiración Controlada Primaria', 'Reacción Corporal Preventiva'], correct: 1 },
    { q: '¿Qué debe hacer primero al encontrar a alguien inconsciente?', opts: ['Darle agua', 'Verificar si responde y llamar a emergencias', 'Moverlo inmediatamente', 'Darle medicamentos'],  correct: 1 },
    { q: '¿Cómo se trata una quemadura leve?',                   opts: ['Aplicar hielo directamente', 'Enfriar con agua fría corriente', 'Cubrir con algodón', 'Aplicar pasta de dientes'],     correct: 1 },
    { q: '¿Cuántas compresiones por minuto recomienda el RCP?',  opts: ['40-60', '80-100', '100-120', '140-160'],                                                                                 correct: 2 },
  ],
  'dibujo': [
    { q: '¿Qué es la perspectiva en el dibujo?',                 opts: ['Un tipo de lápiz', 'La representación del espacio en 3D sobre superficie plana', 'Un estilo de pintura', 'La teoría del color'], correct: 1 },
    { q: '¿Qué técnica crea la sensación de volumen?',           opts: ['El contorno', 'El punteado', 'El sombreado', 'El tramado de color'],                                                    correct: 2 },
    { q: '¿Cuál es la proporción clásica del cuerpo humano?',    opts: ['5 cabezas de alto', '7-8 cabezas de alto', '10 cabezas de alto', '3 cabezas de alto'],                                 correct: 1 },
  ],
  'software': [
    { q: '¿Qué es una variable en programación?',                opts: ['Un tipo de error', 'Un espacio para almacenar datos', 'Un lenguaje de programación', 'Una función matemática'],        correct: 1 },
    { q: '¿Qué hace un bucle "for"?',                            opts: ['Detiene el programa', 'Repite una acción un número de veces', 'Define una variable', 'Crea una función'],              correct: 1 },
    { q: '¿Cuál es el símbolo de comentario en Python?',         opts: ['//', '/* */', '#', '--'],                                                                                               correct: 2 },
  ],
  'redes': [
    { q: '¿Cuántas capas tiene el modelo OSI?',                  opts: ['4', '5', '6', '7'],                                                                                                     correct: 3 },
    { q: '¿Qué protocolo se usa para navegar la web de forma segura?', opts: ['FTP', 'HTTP', 'HTTPS', 'SMTP'],                                                                                  correct: 2 },
    { q: '¿Qué es una dirección IP?',                            opts: ['Un tipo de cable de red', 'Un identificador único de dispositivo en red', 'Un protocolo de seguridad', 'Una marca de router'], correct: 1 },
  ],
};

// ============================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// Se guarda/recupera en sessionStorage para persistir durante
// la sesión del navegador (se pierde al cerrar la pestaña).
// ============================================================
let state = {
  enrolled:       [],   // IDs de cursos en los que el usuario está inscrito
  completed:      [],   // IDs de cursos que el usuario ha completado
  completedDates: {},   // { id: 'fecha en texto' } de cada curso completado
  resources:      {},   // { id: [bool, bool, ...] } — qué recursos se han visto
};

// Guarda el estado en sessionStorage
function saveState() {
  try {
    sessionStorage.setItem('educursos_state', JSON.stringify(state));
  } catch (e) {}
}

// Recupera el estado de sessionStorage y rellena los arrays de recursos
// para cursos que aún no tengan datos guardados
function loadState() {
  try {
    const saved = sessionStorage.getItem('educursos_state');
    if (saved) state = JSON.parse(saved);
  } catch (e) {}

  // Garantizar que cada curso tenga su array de recursos inicializado
  Object.keys(COURSE_DATA).forEach(id => {
    if (!state.resources[id]) {
      state.resources[id] = Array(COURSE_DATA[id].resources).fill(false);
    }
  });
}

// ============================================================
// NAVEGACIÓN ENTRE PÁGINAS
// Muestra la página con el id dado y oculta las demás.
// También actualiza el botón activo en la barra de navegación.
// ============================================================
function showPage(id, btn) {
  // Ocultar todas las páginas y desactivar todos los botones
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));

  // Mostrar la página seleccionada y marcar el botón como activo
  document.getElementById('page-' + id).classList.add('active');
  if (btn) btn.classList.add('active');

  window.scrollTo(0, 0);

  // Renderizar contenido dinámico según la página
  if (id === 'siguiendo')  renderFollowing();
  if (id === 'finalizados') renderCompleted();
  if (id === 'bienvenida') updateStats();
}

// ============================================================
// FILTRO DE CATEGORÍAS EN LA LISTA DE CURSOS
// Muestra u oculta las tarjetas según el topic seleccionado.
// ============================================================
function filterTopic(topic, btn) {
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.course-card').forEach(card => {
    const visible = topic === 'todos' || card.dataset.topic === topic;
    card.style.display = visible ? 'block' : 'none';
  });
}

// ============================================================
// INSCRIPCIÓN A UN CURSO (desde el botón de la tarjeta)
// Agrega el curso al estado, actualiza la UI y muestra un toast.
// No hace nada si el usuario ya está inscrito o ya lo completó.
// ============================================================
function enrollCourse(id, btnEl) {
  if (state.enrolled.includes(id) || state.completed.includes(id)) return;

  state.enrolled.push(id);
  saveState();

  btnEl.textContent = '✓ Inscrito';
  btnEl.classList.add('enrolled');
  btnEl.disabled = true;

  showMiniProgress(id);
  showToast('¡Inscrito en ' + COURSE_DATA[id].name + '!');
  updateStats();
}

// Muestra la barra de progreso pequeña dentro de la tarjeta del curso
function showMiniProgress(id) {
  const mp = document.getElementById('mini-prog-' + id);
  if (mp) mp.style.display = 'block';
  updateCardProgress(id);
}

// Actualiza el porcentaje y ancho de la barra de progreso en la tarjeta
function updateCardProgress(id) {
  const res = state.resources[id];
  if (!res) return;

  const pct  = Math.round(res.filter(Boolean).length / res.length * 100);
  const fill = document.getElementById('pfill-' + id);
  const pctEl = document.getElementById('ppct-' + id);

  if (fill)  fill.style.width    = pct + '%';
  if (pctEl) pctEl.textContent   = pct + '%';
}

// ============================================================
// ABRIR DETALLE DE UN CURSO
// Si el usuario no está inscrito, lo inscribe automáticamente.
// Oculta la lista de cursos y muestra el detalle del curso.
// ============================================================
function openCourse(id) {
  // Auto-inscripción si es la primera vez que entra al detalle
  if (!state.enrolled.includes(id) && !state.completed.includes(id)) {
    state.enrolled.push(id);
    saveState();
    showToast('¡Inscrito automáticamente en ' + COURSE_DATA[id].name + '!');
    updateStats();
  }

  // Mostrar el detalle y ocultar la lista
  document.getElementById('courses-list-view').style.display = 'none';
  document.querySelectorAll('.course-detail').forEach(d => d.classList.remove('active'));
  document.getElementById('detail-' + id).classList.add('active');

  // Sincronizar botón de inscripción en la tarjeta correspondiente
  const card = document.querySelector('.course-card[data-id="' + id + '"]');
  if (card) {
    const btn = card.querySelector('.btn-enroll');
    if (btn && !btn.classList.contains('enrolled')) {
      btn.textContent = '✓ Inscrito';
      btn.classList.add('enrolled');
      btn.disabled = true;
    }
    showMiniProgress(id);
  }

  refreshResourceUI(id);
}

// Vuelve a la lista de cursos desde el detalle
function closeCourseDetail() {
  document.getElementById('courses-list-view').style.display = 'block';
  document.querySelectorAll('.course-detail').forEach(d => d.classList.remove('active'));

  // Actualizar todas las barras de progreso al volver
  Object.keys(COURSE_DATA).forEach(id => updateCardProgress(id));
  updateStats();
}

// ============================================================
// ABRIR RECURSO
// Marca el recurso como visto (permanente) y abre el enlace.
// Una vez marcado, no se puede desmarcar.
// ============================================================
function openResource(courseId, index) {
  // Inicializar array de recursos si no existe
  if (!state.resources[courseId]) {
    state.resources[courseId] = Array(COURSE_DATA[courseId].resources).fill(false);
  }

  // Marcar como visto solo si aún no lo estaba
  if (!state.resources[courseId][index]) {
    state.resources[courseId][index] = true;
    saveState();
    refreshResourceUI(courseId);
    updateCardProgress(courseId);
    updateFollowingCard(courseId);
    updateStats();
  }

  // Abrir el enlace del recurso en una nueva pestaña
  const link = RESOURCE_LINKS[courseId]?.[index];
  if (link?.url) window.open(link.url, '_blank');
}

// Actualiza los íconos de check (○ / ✓) y el estilo de cada recurso
// en la vista de detalle del curso
function refreshResourceUI(courseId) {
  const res = state.resources[courseId] || [];

  res.forEach((done, i) => {
    const checkEl = document.getElementById('res-' + courseId + '-' + i);
    const item    = document.getElementById('ritem-' + courseId + '-' + i);

    if (checkEl) {
      checkEl.textContent = done ? '✓' : '○';
      checkEl.className = 'resource-check' + (done ? ' checked' : '');
    }
    if (item) {
      item.classList.toggle('done', done);
    }
  });
}

// ============================================================
// HELPERS DE PROGRESO
// ============================================================

// Devuelve el % de recursos vistos para un curso (0–100)
function getProgressPct(id) {
  const res = state.resources[id] || [];
  if (!res.length) return 0;
  return Math.round(res.filter(Boolean).length / res.length * 100);
}

// ============================================================
// ESTADÍSTICAS DE LA PANTALLA DE INICIO
// ============================================================
function updateStats() {
  const inProgress = state.enrolled.filter(id => !state.completed.includes(id));

  const elProg    = document.getElementById('stat-in-progress');
  const elProgSub = document.getElementById('stat-in-progress-sub');
  const elComp    = document.getElementById('stat-completed');

  if (elProg)    elProg.textContent    = inProgress.length;
  if (elProgSub) elProgSub.textContent = inProgress.map(id => COURSE_DATA[id].name.split(' ')[0]).join(', ') || '—';
  if (elComp)    elComp.textContent    = state.completed.length;
}

// ============================================================
// RENDER: PÁGINA "MIS CURSOS"
// Genera dinámicamente las tarjetas de cursos en progreso.
// ============================================================
function renderFollowing() {
  const grid  = document.getElementById('following-grid');
  const empty = document.getElementById('empty-siguiendo');
  const active = state.enrolled.filter(id => !state.completed.includes(id));

  // Limpiar tarjetas existentes
  grid.querySelectorAll('.following-card').forEach(c => c.remove());

  if (active.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  active.forEach(id => {
    const d   = COURSE_DATA[id];
    const pct = getProgressPct(id);

    const card = document.createElement('div');
    card.className = 'following-card';
    card.id = 'fcard-' + id;
    card.innerHTML = `
      <div class="following-header">
        <div class="following-icon">${d.icon}</div>
        <div>
          <div class="following-title">${d.name}</div>
          <div class="following-category">${d.category}</div>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" id="fpfill-${id}" style="width:${pct}%"></div>
      </div>
      <div class="progress-label">
        <span>Progreso recursos</span>
        <span id="fppct-${id}">${pct}%</span>
      </div>
      <button class="continue-btn" onclick="goToCourse('${id}')">Continuar curso →</button>
    `;
    grid.appendChild(card);
  });
}

// Actualiza la barra de progreso de una tarjeta en "Mis cursos"
function updateFollowingCard(id) {
  const pct   = getProgressPct(id);
  const fill  = document.getElementById('fpfill-' + id);
  const pctEl = document.getElementById('fppct-' + id);

  if (fill)  fill.style.width    = pct + '%';
  if (pctEl) pctEl.textContent   = pct + '%';
}

// Navega a la página de cursos y abre el detalle del curso indicado
function goToCourse(id) {
  showPage('cursar', document.querySelectorAll('.nav-links button')[1]);
  setTimeout(() => openCourse(id), 50);
}

// ============================================================
// RENDER: PÁGINA "COMPLETADOS"
// Genera dinámicamente las tarjetas de cursos finalizados.
// ============================================================
function renderCompleted() {
  const list  = document.getElementById('completed-list');
  const empty = document.getElementById('empty-finalizados');

  // Limpiar tarjetas existentes
  list.querySelectorAll('.completed-card').forEach(c => c.remove());

  if (state.completed.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  state.completed.forEach(id => {
    const d    = COURSE_DATA[id];
    const date = state.completedDates[id] || 'Fecha desconocida';

    const card = document.createElement('div');
    card.className = 'completed-card';
    card.innerHTML = `
      <div class="completed-icon">${d.icon}</div>
      <div class="completed-info">
        <span class="badge-complete">✓ Completado</span>
        <div class="completed-title">${d.name}</div>
        <div class="completed-meta">${d.category} · Completado el ${date}</div>
      </div>
      <button class="btn-cert" onclick="openCert('${d.name}', '${date}')">Ver certificado</button>
    `;
    list.appendChild(card);
  });
}

// ============================================================
// MODAL CERTIFICADO
// ============================================================

// Abre el modal con el nombre del curso y la fecha de finalización
function openCert(courseName, date) {
  document.getElementById('cert-course-name').textContent = courseName;
  document.getElementById('cert-date').textContent = 'Fecha de finalización: ' + date;
  document.getElementById('cert-modal').classList.add('active');
}

function closeCert() {
  document.getElementById('cert-modal').classList.remove('active');
}

// ============================================================
// MODAL TEST
// Abre el test del curso, construye las preguntas en el DOM
// y reinicia el estado de respuestas.
// ============================================================

// Variables de estado del test activo
let currentCourseTest = null;  // ID del curso que se está evaluando
let currentAnswers    = {};    // { índicePregunta: índiceOpciónElegida }
let currentCorrect    = [];    // Array con los índices correctos de cada pregunta

function openTest(courseId) {
  currentCourseTest = courseId;
  currentAnswers    = {};

  const qs = TEST_BANK[courseId] || [];
  currentCorrect = qs.map(q => q.correct);

  document.getElementById('test-title').textContent = 'Test: ' + COURSE_DATA[courseId].name;

  // Construir HTML de preguntas y opciones
  let html = '';
  qs.forEach((q, qi) => {
    html += `<div class="question"><p>${qi + 1}. ${q.q}</p>`;
    q.opts.forEach((opt, oi) => {
      html += `<label class="answer-option" id="opt-${qi}-${oi}" onclick="selectAnswer(${qi},${oi})">${opt}</label>`;
    });
    html += '</div>';
  });

  document.getElementById('test-questions').innerHTML = html;
  document.getElementById('test-result').style.display = 'none';
  document.getElementById('btn-submit-test').style.display = 'inline-block';
  document.getElementById('test-modal').classList.add('active');
}

// Marca visualmente la opción elegida para una pregunta
function selectAnswer(qi, oi) {
  const qs = TEST_BANK[currentCourseTest];
  if (!qs) return;

  currentAnswers[qi] = oi;

  // Quitar selección previa y aplicar la nueva
  qs[qi].opts.forEach((_, i) => {
    document.getElementById('opt-' + qi + '-' + i)?.classList.remove('selected');
  });
  document.getElementById('opt-' + qi + '-' + oi)?.classList.add('selected');
}

// Evalúa las respuestas, muestra el resultado y completa el curso si aprueba
function submitTest() {
  const qs    = TEST_BANK[currentCourseTest] || [];
  const total = currentCorrect.length;
  let correct = 0;

  // Colorear opciones correctas/incorrectas y contar aciertos
  currentCorrect.forEach((correctIdx, qi) => {
    const chosen = currentAnswers[qi];

    qs[qi].opts.forEach((_, i) => {
      const el = document.getElementById('opt-' + qi + '-' + i);
      if (!el) return;
      el.style.pointerEvents = 'none'; // Deshabilitar clic tras enviar

      if (i === correctIdx)                      el.classList.add('correct');
      else if (i === chosen && chosen !== correctIdx) el.classList.add('wrong');
    });

    if (chosen === correctIdx) correct++;
  });

  const pass   = correct >= Math.ceil(total * 0.6); // Mínimo 60% para aprobar
  const resDiv = document.getElementById('test-result');
  resDiv.style.display = 'block';

  if (pass) {
    resDiv.innerHTML = `
      <div class="result-msg result-pass">
        ¡Felicidades! Aprobaste con ${correct}/${total} respuestas correctas.<br>
        <strong>¡Puedes obtener tu certificado!</strong>
      </div>`;
    completeCourse(currentCourseTest);
  } else {
    resDiv.innerHTML = `
      <div class="result-msg result-fail">
        Obtuviste ${correct}/${total}. Necesitas al menos ${Math.ceil(total * 0.6)} respuestas correctas.<br>
        Repasa el material e inténtalo de nuevo.
      </div>`;
  }

  document.getElementById('btn-submit-test').style.display = 'none';
}

function closeTest() {
  document.getElementById('test-modal').classList.remove('active');
}

// ============================================================
// COMPLETAR CURSO
// Mueve el curso de "inscrito" a "completado", guarda la fecha
// y actualiza la UI de la tarjeta en la lista de cursos.
// ============================================================
function completeCourse(id) {
  if (state.completed.includes(id)) return;

  state.completed.push(id);
  state.enrolled = state.enrolled.filter(e => e !== id);

  // Guardar fecha de finalización en formato legible
  const now    = new Date();
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  state.completedDates[id] = `${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`;

  saveState();
  updateStats();

  // Marcar visualmente la tarjeta en la lista de cursos
  const card = document.querySelector('.course-card[data-id="' + id + '"]');
  if (card) card.classList.add('completed-card-grid');

  showToast('Curso completado! Certificado disponible en "Completados"');
}

// ============================================================
// TOAST (notificación flotante)
// Muestra un mensaje temporal en la parte inferior de la pantalla.
// ============================================================
function showToast(msg) {
  let t = document.getElementById('toast');

  // Crear el elemento si no existe aún
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }

  t.textContent = msg;
  t.classList.add('show');

  // Ocultar automáticamente después de 3.5 segundos
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================================================
// CERRAR MODALES AL HACER CLIC EN EL FONDO
// ============================================================
document.getElementById('cert-modal').addEventListener('click', function (e) {
  if (e.target === this) closeCert();
});
document.getElementById('test-modal').addEventListener('click', function (e) {
  if (e.target === this) closeTest();
});

// ============================================================
// INICIALIZACIÓN
// Se ejecuta al cargar la página: recupera el estado guardado
// y sincroniza la UI con los datos de la sesión anterior.
// ============================================================
(function init() {
  loadState();

  // Restaurar estado visual de cada tarjeta de curso
  Object.keys(COURSE_DATA).forEach(id => {
    const card = document.querySelector('.course-card[data-id="' + id + '"]');
    if (!card) return;
    const btn = card.querySelector('.btn-enroll');

    if (state.completed.includes(id)) {
      // Curso ya completado: deshabilitar tarjeta
      card.classList.add('completed-card-grid');
      if (btn) { btn.textContent = '✓ Completado'; btn.classList.add('enrolled'); btn.disabled = true; }

    } else if (state.enrolled.includes(id)) {
      // Curso en progreso: mostrar barra de avance
      if (btn) { btn.textContent = '✓ Inscrito'; btn.classList.add('enrolled'); btn.disabled = true; }
      showMiniProgress(id);
    }
  });

  updateStats();
})();