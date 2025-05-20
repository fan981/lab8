const students = [
    "张", "李", "王", "赵", "钱", "孙", "周", "吴",
    "郑", "袁", "冯", "陈", "褚", "卫",
    "蒋", "沈", "韩", "杨"
];

const studentList = document.getElementById('studentList');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const selectedStudent = document.getElementById('selectedStudent');

function initStudentList() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.textContent = student;
        studentList.appendChild(studentElement);
    });
}

function highlightStudent(index) {
    const studentElements = document.querySelectorAll('.student');
    studentElements.forEach((el, i) => {
        if (i === index) {
            el.classList.add('highlight');
        } else {
            el.classList.remove('highlight');
        }
    });
}

let timer;
let isSelecting = false;

function startSelection() {
    if (isSelecting) return;
    
    isSelecting = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    selectedStudent.textContent = "选择中...";
    
    timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        highlightStudent(randomIndex);
    }, 100);
}

function stopSelection() {
    if (!isSelecting) return;
    
    clearInterval(timer);
    isSelecting = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    const highlighted = document.querySelector('.student.highlight');
    if (highlighted) {
        selectedStudent.textContent = highlighted.textContent;
    }
}

startBtn.addEventListener('click', startSelection);
stopBtn.addEventListener('click', stopSelection);

initStudentList();