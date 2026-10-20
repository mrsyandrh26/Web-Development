# bic21203-lab4a-javascript

Name: Marsya Mazli  
Student ID: CI240051  
Course: BIC21203  
Lab: 4a – Client-Side Scripting (JavaScript)

---

Hi! This repository contains my Lab 4a work for client-side JavaScript. I built three small interactive web pages to practise what we learned in class: selecting DOM elements, writing functions, handling events with `addEventListener()`, using conditions (`if...else if...else`) for input validation, and using a `for` loop with DOM methods to generate content dynamically.

For all three questions I used an external `script.js` file, `addEventListener()` instead of inline `onclick`, and `textContent` for any text shown to the user (so no user input is inserted with `innerHTML`). Each question is in its own folder so it can be run and tested separately.

---

All three questions run in Firefox. No external libraries are needed. Just open the each file in Firefox browser.

### Q1 – Interactive Text Changer
1. Open the `Lab 4a` folder.
2. Double-click `interactive_text_changer.html` to open it in browser.
3. On page load you should see the message **"Welcome to my website!"**.
4. Click the **"Change Message"** button.
5. The paragraph should change to **"Hello there!"**.

### Q2 – Smart Number Validator
1. Open the `Lab 4a` folder.
2. Double-click `smart_number_validator.html` to open it in browser.
3. Type a number into the input box and click **"Check"**.
4. Test with these values to see each message:
   - `5` → "The number is lower than 10"
   - `10` → "The number is equal to 10"
   - `15` → "The number is higher than 10"
   - `10.5` → "The number is higher than 10" (decimals are valid)
   - `abc` → "Please enter a valid number!"
   - Empty input (or just spaces) → "Please enter a valid number!"

### Q3 – Dynamic Number Generator (![alt text](image.png))
1. Open the `Lab 4a` folder.
2. Double-click `dynamic_number_generator.html` to open it in your browser.
3. Click the **"Generate"** button.
4. An ordered list should appear showing:
   1. The number is 1
   2. The number is 2
   3. The number is 3
   4. The number is 4
   5. The number is 5
5. Click **"Generate"** again — the list should stay the same (no duplicate items).

---