// App.js (or MainComponent.js)
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import SearchForm from './SearchForm';
import './styles.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch recipes based on searchQuery
        // Example: fetchRecipes(searchQuery);
        // You'll implement this logic using a recipe API (e.g., Spoonacular)
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="app">
            <header>
                <h1>Recipe Finder</h1>
                <SearchForm onSearch={handleSearch} />
            </header>
            <main>
                <RecipeList recipes={recipes} />
            </main>
            <footer>
                <p>&copy; 2024 Recipe Finder App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
