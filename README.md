1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answar: getElementById- getElementById দিয়ে শুধু একটাই Id সিলেক্ট করি ।
getElementByClassName: getElementByClassName দিয়ে একই ক্লাসের সবগুলো এলিমেন্ট পাওয়া যায় ।
querySelector: querySelector দিয়ে প্রথম ম্যাচিং এলিমেন্ট পাওয়া যায় ।
querySelectorAll: querySelectorAll দিয়ে সবগুলো এলিমেন্ট পাওয়া যায় ।

2. How do you create and insert a new element into the DOM?

Answar: 
একটি নতুন এলিমেন্ট তৈরি করি ceateElement দিয়ে, এটিতে text/attributes যোগ করি এবং apendChild যুক্ত করি। 
let newPara = document.createElement("p");
newParagraph.textContent = "Hello World"
document.body.appendChild(newParagraph);


3. What is Event Bubbling and how does it work?
Answar: Event Bubbling এ ইভেন্ট নিচ থেকে উপর দিকে যায় ।



4. What is Event Delegation in JavaScript? Why is it useful?
Answar: Event Delegation একটা parent এলিমেন্ট দিয়ে child গুলোকে হ্যান্ডেল করা যায়।


5. What is the difference between preventDefault() and stopPropagation() methods?
Answar: preventDefault দিয়ে ডিফল্ট এ্যাকশন বন্ধ করা হয় এবং stopPropagation দিয়ে উপরের দিকে যাওয়া যায়।
