/**
 * Fat Loss Diet Plan Creator
 * Logic for calculating calories and generating Kerala diet plan
 */

const KERALA_FOOD_DATABASE = {
    breakfast: [
        { name: "Puttu and Kadala Curry (1 cup)", calories: 350, type: "veg", ingredients: ["Rice Flour", "Grated Coconut", "Black Chickpeas", "Onion", "Tomato", "Green Chilli", "Ginger", "Garlic", "Coriander Powder", "Chilli Powder", "Turmeric Powder", "Garam Masala", "Mustard Seeds", "Curry Leaves", "Coconut Oil", "Salt"] },
        { name: "Idli (3 nos) with Sambar", calories: 250, type: "veg", ingredients: ["Idli Rice", "Urad Dal", "Toor Dal", "Drumstick", "Carrot", "Potato", "Okra", "Tomato", "Sambar Powder", "Tamarind", "Asafoetida (Hing)", "Mustard Seeds", "Curry Leaves", "Dry Red Chilli", "Coriander Leaves", "Salt", "Oil"] },
        { name: "Dosa (2 nos) with Chutney", calories: 300, type: "veg", ingredients: ["Dosa Rice/Idli Rice", "Urad Dal", "Methi Seeds", "Grated Coconut", "Green Chilli", "Ginger", "Shallots", "Tamarind", "Mustard Seeds", "Curry Leaves", "Salt", "Oil"] },
        { name: "Appam (2 nos) with Veg Stew", calories: 320, type: "veg", ingredients: ["Raw Rice", "Coconut Milk", "Yeast/Coconut Water", "Potato", "Carrot", "Green Peas", "Beans", "Onion", "Green Chilli", "Ginger", "Cinnamon", "Cloves", "Cardamom", "Peppercorns", "Curry Leaves", "Coconut Oil", "Sugar", "Salt"] },
        { name: "Appam (2 nos) with Egg Roast", calories: 380, type: "non-veg", ingredients: ["Raw Rice", "Coconut Milk", "Eggs", "Onion", "Tomato", "Green Chilli", "Ginger", "Garlic", "Chilli Powder", "Coriander Powder", "Turmeric Powder", "Garam Masala", "Curry Leaves", "Coconut Oil", "Salt"] },
        { name: "Idiyappam (3 nos) with Chickpea Curry", calories: 330, type: "veg", ingredients: ["Roasted Rice Flour", "Grated Coconut", "White Chickpeas", "Onion", "Tomato", "Green Chilli", "Coconut Milk", "Ginger", "Garlic", "Fennel Seeds", "Cinnamon", "Cloves", "Mustard Seeds", "Curry Leaves", "Coconut Oil", "Salt"] },
        { name: "Oats Upma with Veggies", calories: 280, type: "veg", ingredients: ["Rolled Oats", "Carrot", "Beans", "Green Peas", "Onion", "Green Chilli", "Ginger", "Mustard Seeds", "Urad Dal", "Chana Dal", "Curry Leaves", "Cashews (Optional)", "Oil", "Salt", "Lemon"] },
        { name: "Ragi Puttu (1 cup) with Banana", calories: 300, type: "veg", ingredients: ["Ragi Flour", "Grated Coconut", "Ripe Banana (Small)", "Salt"] }
    ],
    lunch: [
        { name: "Red Rice (1 cup), Thoran, Sambar, Curd", calories: 450, type: "veg", ingredients: ["Kerala Red Rice", "Cabbage/Beans/Carrot (for Thoran)", "Grated Coconut", "Green Chilli", "Cumin Seeds", "Toor Dal", "Mixed Vegetables (for Sambar)", "Sambar Powder", "Tamarind", "Curd/Yogurt", "Mustard Seeds", "Curry Leaves", "Turmeric Powder", "Salt", "Coconut Oil"] },
        { name: "Red Rice (1 cup), Fish Curry, Cabbage Thoran", calories: 480, type: "non-veg", ingredients: ["Kerala Red Rice", "Fish (Sardine/Mackerel)", "Kodampuli (Pot Tamarind)", "Kashmiri Chilli Powder", "Turmeric Powder", "Fenugreek Powder", "Ginger", "Garlic", "Shallots", "Cabbage", "Grated Coconut", "Green Chilli", "Curry Leaves", "Mustard Seeds", "Salt", "Coconut Oil"] },
        { name: "Red Rice (1 cup), Chicken Curry (Light gravy), Salad", calories: 520, type: "non-veg", ingredients: ["Kerala Red Rice", "Chicken", "Onion", "Tomato", "Ginger", "Garlic", "Green Chilli", "Chilli Powder", "Coriander Powder", "Turmeric Powder", "Garam Masala", "Curry Leaves", "Cucumber", "Carrot", "Onion (for Salad)", "Salt", "Coconut Oil"] },
        { name: "Red Rice (1 cup), Avial, Moru Curry", calories: 420, type: "veg", ingredients: ["Kerala Red Rice", "Elephant Yam", "Plantain", "Carrot", "Beans", "Drumstick", "Snake Gourd", "Grated Coconut", "Cumin Seeds", "Green Chilli", "Curd/Yogurt", "Turmeric Powder", "Curry Leaves", "Coconut Oil", "Mustard Seeds", "Fenugreek Seeds", "Dry Red Chilli", "Ginger", "Garlic", "Salt"] },
        { name: "Red Rice (1 cup), Egg Roast, Beetroot Thoran", calories: 460, type: "non-veg", ingredients: ["Kerala Red Rice", "Eggs", "Onion", "Tomato", "Chilli Powder", "Coriander Powder", "Garam Masala", "Beetroot", "Grated Coconut", "Green Chilli", "Garlic", "Cumin Seeds", "Mustard Seeds", "Curry Leaves", "Salt", "Coconut Oil"] },
        { name: "Red Rice (1 cup), Dal Curry, Spinach Thoran", calories: 430, type: "veg", ingredients: ["Kerala Red Rice", "Moong Dal/Toor Dal", "Spinach (Cheera)", "Grated Coconut", "Green Chilli", "Garlic", "Cumin Seeds", "Turmeric Powder", "Mustard Seeds", "Dry Red Chilli", "Curry Leaves", "Salt", "Coconut Oil", "Ghee (Optional)"] }
    ],
    dinner: [
        { name: "Wheat Chapati (2 nos) with Veg Kurma", calories: 300, type: "veg", ingredients: ["Atta (Wheat Flour)", "Potato", "Carrot", "Green Peas", "Beans", "Onion", "Tomato", "Grated Coconut", "Cashews/Poppy Seeds", "Fennel Seeds", "Ginger", "Garlic", "Green Chilli", "Spices (Bay Leaf, Cinnamon)", "Salt", "Oil"] },
        { name: "Wheat Chapati (2 nos) with Grilled Chicken", calories: 350, type: "non-veg", ingredients: ["Atta (Wheat Flour)", "Chicken Breast", "Yogurt", "Tandoori Masala/Chilli Powder", "Lemon Juice", "Ginger Garlic Paste", "Salt", "Oil/Butter"] },
        { name: "Kanji (Rice Porridge) with Payar", calories: 280, type: "veg", ingredients: ["Rice (Broken/Red)", "Green Gram (Whole Moong)", "Grated Coconut", "Green Chilli", "Cumin Seeds", "Garlic", "Turmeric Powder", "Salt", "Pickle (Optional)"] },
        { name: "Grilled Fish with Steamed Veggies", calories: 320, type: "non-veg", ingredients: ["Fish Fillet", "Pepper Powder", "Lemon Juice", "Salt", "Olive Oil/Coconut Oil", "Broccoli", "Carrot", "Beans"] },
        { name: "Wheat Chapati (2 nos) with Paneer Curry", calories: 360, type: "veg", ingredients: ["Atta (Wheat Flour)", "Paneer", "Onion", "Tomato", "Ginger Garlic Paste", "Chilli Powder", "Coriander Powder", "Garam Masala", "Kasuri Methi", "Cream/Cashew Paste", "Salt", "Oil/Butter"] },
        { name: "Multigrain Dosa with Tomato Chutney", calories: 250, type: "veg", ingredients: ["Multigrain Batter (Ragi, Wheat, Rice)", "Tomato", "Onion", "Dry Red Chilli", "Garlic", "Mustard Seeds", "Curry Leaves", "Urad Dal", "Salt", "Oil"] }
    ],
    snack: [
        { name: "Fruit Salad (No Sugar)", calories: 100, type: "veg", ingredients: ["Apple", "Papaya", "Pomegranate", "Banana", "Watermelon (Seasonal)"] },
        { name: "Buttermilk (Sambharam)", calories: 40, type: "veg", ingredients: ["Curd", "Water", "Green Chilli", "Ginger", "Curry Leaves", "Salt"] },
        { name: "Roasted Peanuts (Handful)", calories: 150, type: "veg", ingredients: ["Raw Peanuts"] },
        { name: "Boiled Egg White (2)", calories: 34, type: "non-veg", ingredients: ["Eggs", "Salt", "Pepper"] },
        { name: "Green Tea with 2 Marie Biscuits", calories: 80, type: "veg", ingredients: ["Green Tea Bag", "Marie Biscuits"] }
    ]
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diet-form');
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const weeklyPlanContainer = document.getElementById('weekly-plan-container');
    const targetCaloriesEl = document.getElementById('target-calories');
    const waterIntakeEl = document.getElementById('water-intake');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const backBtn = document.getElementById('back-btn');
    const viewGroceryBtn = document.getElementById('view-grocery-btn');
    const groceryModal = document.getElementById('grocery-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const groceryListContainer = document.getElementById('grocery-list-container');

    let userData = null;
    let currentPlan = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather Data
        const age = parseInt(document.getElementById('age').value);
        const weight = parseInt(document.getElementById('weight').value);
        const height = parseInt(document.getElementById('height').value);
        const sex = document.getElementById('sex').value;
        const activity = parseFloat(document.getElementById('activity').value);
        const preference = document.getElementById('preference').value;
        const deficit = parseInt(document.getElementById('goal-speed').value);

        userData = { age, weight, height, sex, activity, preference, deficit };

        generateAndShowPlan(userData);
    });

    regenerateBtn.addEventListener('click', () => {
        if (userData) generateAndShowPlan(userData);
    });

    backBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
        // Scroll to top
        window.scrollTo(0, 0);
    });

    viewGroceryBtn.addEventListener('click', () => {
        generateGroceryList(currentPlan);
        groceryModal.classList.add('show');
    });

    const closeModal = () => {
        groceryModal.classList.remove('show');
    };

    closeModalBtn.addEventListener('click', closeModal);
    groceryModal.addEventListener('click', (e) => {
        if (e.target === groceryModal) closeModal();
    });

    function generateAndShowPlan(data) {
        const calories = calculateCalories(data);
        const water = calculateWater(data.weight);

        // Display stats
        targetCaloriesEl.textContent = `${Math.round(calories)} kcal`;
        waterIntakeEl.textContent = `${water} L`;

        // Generate Plan
        renderWeekPlan(weeklyPlanContainer, calories, data.preference);

        // Switch View
        inputSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function calculateCalories(data) {
        // Mifflin-St Jeor Equation
        let bmr;
        if (data.sex === 'male') {
            bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
        } else {
            bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
        }

        const tdee = bmr * data.activity;
        // Use user selected deficit
        let target = tdee - data.deficit;

        const minCalories = data.sex === 'male' ? 1500 : 1200;
        return Math.max(target, minCalories);
    }

    function calculateWater(weight) {
        // Approx 35ml per kg
        return (weight * 0.035).toFixed(1);
    }

    function renderWeekPlan(container, targetCalories, preference) {
        container.innerHTML = '';
        currentPlan = []; // Reset current plan

        DAYS.forEach((day, index) => {
            const meals = getDailyMeals(preference, targetCalories);
            currentPlan.push(meals); // Store for grocery list

            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            dayCard.style.animationDelay = `${index * 0.1}s`;

            dayCard.innerHTML = `
                <div class="day-header">
                    <span>${day}</span>
                    <span style="font-size: 0.9em; font-weight: 400;">Total: ~${meals.totalCals} kcal</span>
                </div>
                <div class="day-meals">
                    <div class="meal">
                        <span class="meal-time">Breakfast</span>
                        <span class="meal-name">${meals.breakfast.name}</span>
                        <small style="color: #6b7280;">${meals.breakfast.calories} kcal</small>
                    </div>
                    <div class="meal">
                        <span class="meal-time">Lunch</span>
                        <span class="meal-name">${meals.lunch.name}</span>
                        <small style="color: #6b7280;">${meals.lunch.calories} kcal</small>
                    </div>
                    <div class="meal">
                        <span class="meal-time">Dinner</span>
                        <span class="meal-name">${meals.dinner.name}</span>
                        <small style="color: #6b7280;">${meals.dinner.calories} kcal</small>
                    </div>
                    <div class="meal">
                        <span class="meal-time">Snack</span>
                        <span class="meal-name">${meals.snack.name}</span>
                        <small style="color: #6b7280;">${meals.snack.calories} kcal</small>
                    </div>
                </div>
            `;

            container.appendChild(dayCard);
        });
    }

    function getDailyMeals(preference, target) {
        // Filter by preference
        // If preference is 'non-veg', can eat both. If 'veg', only veg.
        // Actually typically non-veg eaters eat veg too.
        // So: if user is veg, filter to veg ONLY.
        // If user is non-veg, include ALL.

        const filterFood = (list) => {
            if (preference === 'veg') {
                return list.filter(item => item.type === 'veg');
            }
            return list;
        };

        const r = (list) => list[Math.floor(Math.random() * list.length)];

        const breakfast = r(filterFood(KERALA_FOOD_DATABASE.breakfast));
        const lunch = r(filterFood(KERALA_FOOD_DATABASE.lunch));
        const dinner = r(filterFood(KERALA_FOOD_DATABASE.dinner));
        const snack = r(filterFood(KERALA_FOOD_DATABASE.snack));

        return {
            breakfast,
            lunch,
            dinner,
            snack,
            totalCals: breakfast.calories + lunch.calories + dinner.calories + snack.calories
        };
    }

    function generateGroceryList(plan) {
        const ingredientsSet = new Set();

        plan.forEach(day => {
            ['breakfast', 'lunch', 'dinner', 'snack'].forEach(mealType => {
                if (day[mealType] && day[mealType].ingredients) {
                    day[mealType].ingredients.forEach(ing => ingredientsSet.add(ing));
                }
            });
        });

        // Convert to sorted array
        const sortedIngredients = Array.from(ingredientsSet).sort();

        groceryListContainer.innerHTML = '';
        if (sortedIngredients.length === 0) {
            groceryListContainer.innerHTML = '<p>No ingredients found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.className = 'grocery-list';

        sortedIngredients.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <label class="checkbox-container">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    ${item}
                </label>
            `;
            ul.appendChild(li);
        });

        groceryListContainer.appendChild(ul);
    }
});
