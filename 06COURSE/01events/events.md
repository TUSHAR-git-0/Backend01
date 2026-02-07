
## 1️⃣ Event kya hota hai?
- Event = **kuch hona**
Examples:
- Doorbell bajna
- Message aana
- File read hona
- Server pe request aana

📌 Jab koi action hota hai → usse event bolte hain


## 2️⃣ Event-driven architecture (Basic idea)
- System **wait karta hai**
- Jab event hota hai → tab react karta hai
- Baar-baar check nahi karta

📌 Node.js isi principle pe kaam karta hai


## 3️⃣ Real Life Example – Amazon Delivery 🚚
❌ Galat tareeka (Polling):
- Baar-baar gate check karna
- “Parcel aaya kya?”

✅ Sahi tareeka (Event-based):
- Delivery boy bell bajata hai 🔔
- Bell bajna = Event
- Tum react karte ho

📌 Node.js bhi exactly yahi karta hai


## 4️⃣ Node.js me Event ka flow
1. Koi event hota hai (request, file read, timer)
2. Event emit hota hai
3. Listener function call hota hai
4. CPU tabhi kaam karta hai

📌 CPU bina reason busy nahi hota


## 5️⃣ EventEmitter kya hota hai?
- EventEmitter = **event generate karne wala object**
- Ye events emit karta hai

Example:
- Delivery boy → EventEmitter
- Bell bajana → emit()


## 6️⃣ Event Listener kya hota hai?
- Listener = **reaction dene wala function**
- Event ke naam se attach hota hai

Example:
- Bell baji → gate khola
- Message aaya → reply kiya


## 7️⃣ Publisher–Subscriber Model (IMPORTANT)
- Publisher → Event emit karta hai
- Subscriber → Event sunta hai & react karta hai

📌 Isko Pub-Sub model bolte hain  
📌 Interviews me kaafi poocha jata hai


## 8️⃣ Ek Event, Multiple Listeners
- Ek bell → ghar ke sab log sunte hain
- Ek event → multiple listeners ho sakte hain

Types:
- Multiple-call listeners
- One-time listeners


## 9️⃣ Events kyun use karte hain? (WHY IMPORTANT)
- CPU efficient (waste nahi hota)
- Asynchronous programming easy
- Real-time apps ka base
- Chat, notifications, streams possible

📌 Node.js ke core modules:
- HTTP
- FS
- Streams  
sab events pe hi based hain


## 🔑 10️⃣ One-line Definition (Yaad rakh)
Node.js follows an **asynchronous, event-driven architecture**

Meaning:
- Jab event hota hai → tabhi kaam hota hai


## 11️⃣ Final Summary
- Event = kuch hua
- Emit = event announce karna
- Listener = react karna
- EventEmitter = event banane wala
- Node.js = wait karta hai, check nahi karta
