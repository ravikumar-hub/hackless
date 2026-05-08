// CyberLearn Main Script
let currentLessonId = null;
let currentCategoryId = null;
let completedTopics = new Set();
let sidebarOpen = true;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const navTree = document.getElementById('navTree');
const contentArea = document.getElementById('contentArea');
const sidebarSearch = document.getElementById('sidebarSearch');
const themeToggle = document.getElementById('themeToggle');
const quizModal = document.getElementById('quizModal');
const infoModal = document.getElementById('infoModal');
const breadcrumb = document.getElementById('breadcrumb');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadProgress();
});

function initializeApp() {
    buildNavigation();
    updateStats();
    loadTheme();
}

function setupEventListeners() {
    menuToggle.addEventListener('click', toggleSidebar);
    themeToggle.addEventListener('click', toggleTheme);
    document.getElementById('infoBtn').addEventListener('click', showInfo);
    document.getElementById('closeInfo').addEventListener('click', closeInfo);
    document.getElementById('closeQuiz').addEventListener('click', closeQuiz);
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
    sidebarSearch.addEventListener('input', filterNavigation);
    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);
}

// Navigation Building
function buildNavigation() {
    navTree.innerHTML = '';

    curriculumData.categories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'nav-category';

        const titleEl = document.createElement('div');
        titleEl.className = 'nav-category-title';
        titleEl.innerHTML = `
            ${category.icon} ${category.name}
            <span class="nav-toggle">▼</span>
        `;

        const itemsEl = document.createElement('div');
        itemsEl.className = 'nav-items';

        category.topics.forEach(topic => {
            const itemEl = document.createElement('div');
            itemEl.className = 'nav-item';
            itemEl.innerHTML = `
                ${topic.name}
                <span class="difficulty ${topic.difficulty}">${topic.difficulty}</span>
            `;

            if (completedTopics.has(topic.id)) {
                itemEl.innerHTML = '✓ ' + itemEl.innerHTML;
            }

            itemEl.addEventListener('click', () => {
                loadLesson(topic.id, category.id);
                updateActiveNav();
            });

            itemsEl.appendChild(itemEl);
        });

        titleEl.addEventListener('click', () => {
            itemsEl.classList.toggle('collapsed');
            const toggle = titleEl.querySelector('.nav-toggle');
            toggle.classList.toggle('open');
        });

        categoryEl.appendChild(titleEl);
        categoryEl.appendChild(itemsEl);
        navTree.appendChild(categoryEl);
    });
}

function updateActiveNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.querySelector(`[data-topic-id="${currentLessonId}"]`);
    if (activeItem) activeItem.classList.add('active');

    // Scroll active item into view
    const activeItems = document.querySelectorAll('.nav-item');
    activeItems.forEach(item => {
        if (item.innerHTML.includes(currentLessonId)) {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            item.classList.add('active');
        }
    });
}

function filterNavigation() {
    const searchTerm = sidebarSearch.value.toLowerCase();
    const items = document.querySelectorAll('.nav-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

// Lesson Loading & Rendering
function loadLesson(lessonId, categoryId) {
    currentLessonId = lessonId;
    currentCategoryId = categoryId;

    const lesson = allLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    renderLesson(lesson);
    updateNavigation();
    updateBreadcrumb(lesson);

    // Scroll to top
    contentArea.scrollTop = 0;
}

function renderLesson(lesson) {
    contentArea.innerHTML = `
        <div class="lesson-container">
            <div class="lesson-header">
                <h1 class="lesson-title">${lesson.name}</h1>
                <div class="lesson-meta">
                    <span>📂 ${lesson.category_name}</span>
                    <span>📊 ${lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}</span>
                    <span>🛠️ ${lesson.tools.length} Tools</span>
                </div>
            </div>

            <div class="lesson-content">
                ${lesson.content}
            </div>

            <div class="lesson-tools">
                <h4>Related Tools & Technologies</h4>
                <ul>
                    ${lesson.tools.map(tool => `<li>${tool}</li>`).join('')}
                </ul>
            </div>

            <div class="lesson-buttons">
                <button class="btn btn-primary" onclick="startQuiz('${lesson.id}')">
                    ❓ Take Quiz (${lesson.quiz.length} questions)
                </button>
                ${lesson.difficulty === 'advanced' ? `
                    <button class="btn btn-secondary" onclick="startChallenge('${lesson.id}')">
                        🎯 Challenge Exercise
                    </button>
                ` : ''}
                <button class="btn btn-success" onclick="markAsCompleted('${lesson.id}')">
                    ✓ Mark as Completed
                </button>
            </div>
        </div>
    `;
}

function updateBreadcrumb(lesson) {
    breadcrumb.innerHTML = `
        <span>${lesson.category_icon}</span>
        <span>${lesson.category_name}</span>
        <span>/</span>
        <span>${lesson.name}</span>
    `;
}

function updateNavigation() {
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);

    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= allLessons.length - 1;

    if (currentIndex > 0) {
        prevBtn.textContent = `← ${allLessons[currentIndex - 1].name.substring(0, 20)}...`;
    }
    if (currentIndex < allLessons.length - 1) {
        nextBtn.textContent = `${allLessons[currentIndex + 1].name.substring(0, 20)}... →`;
    }
}

function goToPrevious() {
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex > 0) {
        const prevLesson = allLessons[currentIndex - 1];
        loadLesson(prevLesson.id, prevLesson.category_id);
    }
}

function goToNext() {
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex < allLessons.length - 1) {
        const nextLesson = allLessons[currentIndex + 1];
        loadLesson(nextLesson.id, nextLesson.category_id);
    }
}

// Quiz Management
function startQuiz(lessonId) {
    const lesson = allLessons.find(l => l.id === lessonId);
    if (!lesson || !lesson.quiz) return;

    document.getElementById('quizTitle').textContent = `Quiz: ${lesson.name}`;
    const quizContent = document.getElementById('quizContent');

    quizContent.innerHTML = lesson.quiz.map((q, idx) => `
        <div class="question-item">
            <div class="question-number">Question ${idx + 1} of ${lesson.quiz.length}</div>
            <div class="question-text">${q.question}</div>
            <div class="options">
                ${q.options.map((opt, optIdx) => `
                    <label class="option-label">
                        <input type="radio" name="q${idx}" value="${optIdx}">
                        <span class="option-text">${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.getElementById('submitQuiz').onclick = () => submitQuiz(lesson);
    document.getElementById('quizResult').style.display = 'none';
    quizModal.classList.add('active');
}

function submitQuiz(lesson) {
    const answers = [];
    let correctCount = 0;

    lesson.quiz.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        const answer = selected ? parseInt(selected.value) : null;
        answers.push(answer);
        if (answer === q.correct) correctCount++;
    });

    const percentage = Math.round((correctCount / lesson.quiz.length) * 100);
    const resultDiv = document.getElementById('quizResult');

    if (percentage >= 70) {
        resultDiv.className = 'quiz-result';
        resultDiv.innerHTML = `
            <strong>✓ Quiz Completed: ${percentage}%</strong><br>
            You got ${correctCount} out of ${lesson.quiz.length} correct. Great job!
        `;
        markAsCompleted(lesson.id);
    } else {
        resultDiv.className = 'quiz-result incorrect';
        resultDiv.innerHTML = `
            <strong>✗ Score: ${percentage}%</strong><br>
            You got ${correctCount} out of ${lesson.quiz.length} correct. Review the material and try again.
        `;
    }

    resultDiv.style.display = 'block';
    document.getElementById('submitQuiz').style.display = 'none';
}

function closeQuiz() {
    quizModal.classList.remove('active');
    document.getElementById('submitQuiz').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
}

// Challenge/Scenario Management
function startChallenge(lessonId) {
    alert(`🎯 Challenge Mode: Advanced exercises for ${allLessons.find(l => l.id === lessonId).name}\n\nTry to solve the practical scenario based on what you learned!`);
}

// Progress Management
function markAsCompleted(lessonId) {
    completedTopics.add(lessonId);
    saveProgress();
    updateStats();
    buildNavigation();

    const lesson = allLessons.find(l => l.id === lessonId);
    alert(`✓ Completed: ${lesson.name}`);
}

function saveProgress() {
    localStorage.setItem('cyberlearn_progress', JSON.stringify(Array.from(completedTopics)));
}

function loadProgress() {
    const saved = localStorage.getItem('cyberlearn_progress');
    if (saved) {
        completedTopics = new Set(JSON.parse(saved));
        updateStats();
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        completedTopics.clear();
        localStorage.removeItem('cyberlearn_progress');
        updateStats();
        buildNavigation();
        alert('Progress reset successfully!');
    }
}

// Stats Update
function updateStats() {
    document.getElementById('totalTopics').textContent = allLessons.length;
    document.getElementById('totalQuizzes').textContent = allLessons.filter(l => l.quiz).length;
    document.getElementById('topicsCompleted').textContent = completedTopics.size;

    const percentage = Math.round((completedTopics.size / allLessons.length) * 100);
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
}

// Theme Management
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('cyberlearn_theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

function loadTheme() {
    const theme = localStorage.getItem('cyberlearn_theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();
}

// Sidebar Toggle
function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('closed');
}

// Modals
function showInfo() {
    infoModal.classList.add('active');
}

function closeInfo() {
    infoModal.classList.remove('active');
}

// Self-Updating System (Can be enhanced with API calls)
function checkForUpdates() {
    // In a real implementation, this would call an API
    // For now, it checks localStorage for manual updates
    const lastUpdate = localStorage.getItem('cyberlearn_last_update');
    const now = Date.now();

    // Simulate update check every 24 hours
    if (!lastUpdate || (now - lastUpdate) > 86400000) {
        console.log('Checking for content updates...');
        localStorage.setItem('cyberlearn_last_update', now);
        // API call would go here to fetch new lessons
    }
}

// Initialize updates check
setInterval(checkForUpdates, 3600000); // Check every hour

// Load first lesson on startup
window.addEventListener('load', () => {
    if (allLessons.length > 0) {
        loadLesson(allLessons[0].id, allLessons[0].category_id);
    }
});
