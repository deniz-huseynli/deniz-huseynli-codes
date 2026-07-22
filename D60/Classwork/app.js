let qiymətlər = [65, 80, 45, 92, 58];

let hamisiBoyuk = qiymətlər.every(eded=> eded>50);
console.log(hamisiBoyuk);

let doxsandanBoyuk = qiymətlər.some(eded=> eded>=90);
console.log(doxsandanBoyuk);