// Day 1 - Foundation
// 
// declaring & initialising an empty student object to store students
let students = [];

let idCounter = 1000;

// Generate unique student IDs
// Generate unique student IDs
function generateStudentId() {
  idCounter++;
  return `SBM-${idCounter}`;
}

// 3. Implement Default Parameters, 4. Implement Rest Parameters
function registerStudent(name, course = "Web Development", ...marks) {
  if (!marks || marks.length === 0) {
    marks = [];
  }
  
  const id = generateStudentId();
  const average = calculateAverage(marks);
  const status = determineStatus(average);
  
  const student = {
    id: id,
    name: name,
    course: course,
    marks: marks,
    average: average,
    status: status
  };
  
  students.push(student);
  return student;
}
// 5. Implement Spread Syntax
function addMultipleStudents(...studentObjects) {
  const studentsToAdd = [...studentObjects];
  students = [...students, ...studentsToAdd];
  return students;
}

// 6. Calculate Student Averages
function calculateAverage(marks) {
  if (!marks || marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// 7. Determine Student Status
function determineStatus(average, passingMark = 50) {
  if (average >= passingMark) {
    return "PASS";
  }
  return "FAIL";
}

function displayStudents() {
  console.log("\n=== STUDENT LIST ===");
  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].name} (${students[i].id}) - ${students[i].course}`);
    console.log(`   Marks: [${students[i].marks.join(', ')}] | Avg: ${students[i].average.toFixed(2)} | Status: ${students[i].status}`);
  }
  console.log("====================\n");
}
function generateReport() {
  console.log("\n╔═══════════════════════════════════════╗");
  console.log("║     STUDENT BOOTCAMP MANAGER REPORT    ║");
  console.log("╚═══════════════════════════════════════╝");
  
  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    console.log(`\nStudent ID: ${s.id}`);
    console.log(`Student name: ${s.name}`);
    console.log(`Course: ${s.course}`);
    console.log(`Marks: [${s.marks.join(', ')}]`);
    console.log(`Average: ${s.average.toFixed(2)}`);
    console.log(`Status: ${s.status}`);
  }
  
  let passed = 0;
  let failed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].status === "PASS") {
      passed++;
    } else {
      failed++;
    }
  }
  
  console.log("\n─────────────────────────────────────────");
  console.log("CLASS STATISTICS:");
  console.log(`Total students: ${students.length}`);
  console.log(`Students processed: ${students.length}`);
  console.log(`Students who passed: ${passed}`);
  console.log(`Students who failed: ${failed}`);
  console.log("─────────────────────────────────────────\n");
}

// Day 1 Testing
console.log("DAY 1 - FOUNDATION\n");

registerStudent("Alice Johnson", "JavaScript", 85, 90, 78);
registerStudent("Bob Smith", "Python", 45, 50, 48);
registerStudent("Charlie Davis");
registerStudent("Diana Prince", "React", 92, 88, 95, 90);
registerStudent("Eve Martinez", "Node.js", 65, 70, 62);

displayStudents();
generateReport();


// ==================== PHASE 2 - ADVANCED JAVASCRIPT ====================

// Task 1 — Closure: student-processing counter
const createProcessingCounter = (function() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
})();

const getProcessedCount = createProcessingCounter;

// Task 2 — IIFE: Configuration system
const bootcampConfig = (function() {
  const bootcampName = "SNPL JavaScript Bootcamp";
  const appVersion = "1.0.0";
  const passingMark = 50;
  
  return {
    getBootcampName: function() {
      return bootcampName;
    },
    getAppVersion: function() {
      return appVersion;
    },
    getPassingMark: function() {
      return passingMark;
    }
  };
})();

// Task 3 — Functions as Values
const gradeFormatter = function(grade) {
  return `Grade: ${grade}`;
};

const statusChecker = function(status) {
  return status === "PASS" ? "Congratulations!" : "Needs Improvement";
};

const operationFunctions = [gradeFormatter, statusChecker];

// Task 4 — Higher-Order Functions
function processStudentData(student, processorFn) {
  return processorFn(student);
}

function calculateBonusPoints(marks) {
  let bonus = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) {
      bonus += 5;
    }
  }
  return bonus;
}

// Task 5 — Callbacks
function processStudent(student, callback) {
  console.log(`\nProcessing ${student.name}...`);
  const count = getProcessedCount();
  console.log(`Students processed so far: ${count}`);
  
  setTimeout(function() {
    console.log(`Completed processing for ${student.name}`);
    if (typeof callback === 'function') {
      callback(student);
    }
  }, 100);
}
