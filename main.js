function saved() {
  alert("Your recepie has been saved!");
}

let recipes = [
  "Creamy Garlic Chicken:\n1. Season chicken breasts with salt and pepper.\n2. Heat oil in a pan, sear chicken until golden on both sides, remove.\n3. In the same pan, sauté garlic until fragrant.\n4. Add cream, parmesan, and a splash of chicken broth, simmer 3–4 min.\n5. Return chicken, coat with sauce, cook until done.\n6. Garnish with parsley and serve with pasta or rice.",

  "Avocado Toast with Egg:\n1. Toast 2 slices of sourdough bread.\n2. Mash 1 ripe avocado with lemon juice, salt, and pepper.\n3. Spread mash on toast.\n4. Top each slice with a soft-boiled or poached egg.\n5. Sprinkle with chili flakes and fresh herbs.\n6. Serve immediately for a healthy breakfast.",

  "Spicy Tuna Poke Bowl:\n1. Dice fresh sushi-grade tuna.\n2. Marinate with soy sauce, sesame oil, sriracha, and green onion.\n3. Cook and cool jasmine rice.\n4. Arrange rice in bowls, add tuna, cucumber, avocado, edamame, and seaweed.\n5. Drizzle spicy mayo (mayo + sriracha).\n6. Top with sesame seeds before serving.",

  "One-Pot Tomato Basil Pasta:\n1. Add uncooked spaghetti, cherry tomatoes, garlic, onion, and basil to a pot.\n2. Pour in water or vegetable broth until pasta is just covered.\n3. Add salt, pepper, and a drizzle of olive oil.\n4. Cook over medium heat, stirring until pasta is al dente.\n5. Sauce will thicken naturally.\n6. Finish with parmesan cheese and fresh basil.",

  "Greek Salad with Feta:\n1. Chop cucumbers, tomatoes, red onion, and bell pepper.\n2. Add black olives and crumbled feta cheese.\n3. Whisk olive oil, lemon juice, oregano, salt, and pepper.\n4. Toss vegetables with dressing.\n5. Serve chilled as a side or main dish.",

  "Beef Stir-Fry with Broccoli:\n1. Slice flank steak into thin strips.\n2. Mix soy sauce, oyster sauce, garlic, ginger, and cornstarch slurry.\n3. Heat oil in a wok, stir-fry beef until browned.\n4. Add broccoli florets and sauce.\n5. Stir until broccoli is tender-crisp and sauce coats evenly.\n6. Serve over steamed rice.",

  "Blueberry Oat Pancakes:\n1. Mix flour, oats, baking powder, and sugar in a bowl.\n2. In another bowl, whisk milk, egg, and melted butter.\n3. Combine wet and dry ingredients, fold in fresh blueberries.\n4. Heat pan with butter, pour batter to form pancakes.\n5. Cook until bubbles form, flip, cook until golden.\n6. Serve with maple syrup.",

  "Classic Margherita Pizza:\n1. Prepare pizza dough and roll into a thin base.\n2. Spread tomato sauce evenly.\n3. Top with fresh mozzarella slices.\n4. Bake in preheated oven at 250°C (480°F) until crust is golden.\n5. Add fresh basil leaves and drizzle of olive oil.\n6. Slice and serve hot.",

  "Lemon Herb Salmon:\n1. Preheat oven to 200°C (400°F).\n2. Place salmon fillets on a baking tray lined with parchment.\n3. Mix olive oil, lemon juice, garlic, dill, salt, and pepper.\n4. Brush mixture over salmon.\n5. Bake for 15–18 minutes until flaky.\n6. Garnish with lemon slices and herbs.",

  "Chocolate Lava Cake:\n1. Melt chocolate and butter together.\n2. Whisk eggs, egg yolks, sugar, and vanilla until pale.\n3. Fold in chocolate mixture and a little flour.\n4. Pour batter into greased ramekins.\n5. Bake at 220°C (425°F) for 10–12 min until edges are firm but center soft.\n6. Serve immediately with ice cream.",

  "Creamy Mushroom Risotto:\n1. Heat oil and butter in a pan, sauté onion and garlic.\n2. Add arborio rice, cook 2 min until translucent.\n3. Deglaze with white wine, let absorb.\n4. Gradually add warm vegetable broth, stirring constantly.\n5. Stir in sautéed mushrooms and parmesan.\n6. Cook until creamy, garnish with parsley.",

  "Vegan Buddha Bowl:\n1. Roast chickpeas with olive oil, paprika, and salt.\n2. Cook quinoa and let cool slightly.\n3. Arrange quinoa in bowls, top with roasted chickpeas, cucumbers, carrots, spinach, and avocado.\n4. Drizzle with tahini-lemon sauce.\n5. Sprinkle with sesame seeds and fresh herbs.\n6. Serve immediately.",
];

// Знайдемо всі кнопки View recipe
document.querySelectorAll(".btn.primary").forEach((btn, index) => {
  btn.setAttribute("data-index", index);
  btn.addEventListener("click", () => {
    let recipe = recipes[index];
    alert(recipe);
  });
});
