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
    console.log(`\nCompleted processing for ${student.name}`);
    if (typeof callback === 'function') {
      callback(student);
    }
  }, 100);
}

// Task 6 — this
const studentProcessor = {
  processorName: "Main Processor",
  process: function(student) {
    console.log(`\n[${this.processorName}] \nProcessing student: ${student.name}`);
    console.log(`Course: ${student.course} \nStatus: ${student.status}`);
    return this.processorName;
  }
};

// Task 7 — call()
function displayStudentInfo(course, year) {
  console.log(`\nStudent: ${this.name}`);
  console.log(`Course: ${course}`);
  console.log(`Year: ${year}`);
  console.log(`ID: ${this.id}`);
}

// Task 8 — apply()
function showMarksSummary(subject1, subject2, subject3) {
  console.log(`\nMarks Summary for ${this.name}:`);
  console.log(`Subject 1: ${subject1}% \nSubject 2: ${subject2}% \nSubject 3: ${subject3}%`);
  console.log(`Total marks count: ${this.marks.length}`);
}

// Task 9 — bind()
const boundDisplay = displayStudentInfo.bind(students[0]);
const boundSummary = showMarksSummary.bind(students[1]);

// Task 10 — Generator for unique student IDs
function* studentIdGenerator() {
  let id = 2000;
  while (true) {
    id++;
    yield `GEN-${id}`;
  }
}

const idGen = studentIdGenerator();


// ==================== PHASE 2 DEMONSTRATION ====================

console.log("\n\n=== PHASE 2 - ADVANCED JAVASCRIPT DEMONSTRATIONS ===\n");

console.log("1. CLOSURE - Processing Counter:");
console.log(`   First call: ${getProcessedCount()}`);
console.log(`   Second call: ${getProcessedCount()}`);
console.log(`   Third call: ${getProcessedCount()}`);

console.log("\n2. IIFE - Configuration System:");
console.log(`   Bootcamp: ${bootcampConfig.getBootcampName()}`);
console.log(`   Version: ${bootcampConfig.getAppVersion()}`);
console.log(`   Passing Mark: ${bootcampConfig.getPassingMark()}%`);

console.log("\n3. FUNCTIONS AS VALUES:");
console.log(`   ${gradeFormatter(85)}`);
console.log(`   ${statusChecker("PASS")}`);
console.log(`   Operations stored: ${operationFunctions.length} functions`);

console.log("\n4. HIGHER-ORDER FUNCTION:");
const bonus = calculateBonusPoints(students[0].marks);
console.log(`   Bonus points for ${students[0].name}: ${bonus}+`);
const result = processStudentData(students[0], function(s) {
  return `Processed via HOF: ${s.name} has average ${s.average.toFixed(2)}%`;
});
console.log(`   ${result}`);

console.log("\n5. CALLBACKS - Asynchronous Processing:");
processStudent(students[0], function(student) {
  console.log(`Callback executed for ${student.name} - Status: ${student.status}`);
});

processStudent(students[1], function(student) {
  console.log(`Callback executed for ${student.name} - Status: ${student.status}`);
});

console.log("\n6. THIS KEYWORD:");
studentProcessor.process(students[2]);

console.log("\n7. CALL() - Controlling 'this':");
displayStudentInfo.call(students[0], "JavaScript Advanced", "2024");

console.log("\n8. APPLY() - Different from call():");
const marksArray = [95, 88, 92];
showMarksSummary.apply(students[2], marksArray);

console.log("\n9. BIND() - Create bound function:");
boundDisplay("Full Stack", "2025");
boundSummary.apply(students[1], [45, 50, 48]);

console.log("\n10. GENERATOR - Unique Student IDs:");
console.log(`   First ID: ${idGen.next().value}`);
console.log(`   Second ID: ${idGen.next().value}`);
console.log(`   Third ID: ${idGen.next().value}`);
