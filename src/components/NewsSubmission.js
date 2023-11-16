import React, { useState } from "react";

const NewsSubmission = () => {
    const [numArticles, setNumArticles] = useState(1);
    const [showArticleSelection, setShowArticleSelection] = useState(false);

    const articleCategories = [
        { category: 'Space Exploration', id: 1 },
        { category: 'Astronomy', id: 2 },
        { category: 'Cosmology', id: 3 },
    ];

    const [selectedArticles, setSelectedArticles] = useState([
        {
            category: articleCategories[0].category,
            title: '',
            content: '',
        },
    ]);

    const handleArticleChange = (index, key, value) => {
        const updatedArticles = [...selectedArticles];
        if (!updatedArticles[index]) {
            updatedArticles[index] = { [key]: value };
        } else {
            updatedArticles[index][key] = value;
        }
        setSelectedArticles(updatedArticles);
    };

    const handleSubmit = () => {
        // Here you can handle the submission of articles
        // For now, we'll just log the selectedArticles to the console
        console.log(selectedArticles);
        // In a real application, you might send this data to a server
    };

    const renderArticleSelector = (index) => {
        const articleOptions = articleCategories.map((category, optionIndex) => (
            <option key={optionIndex} value={category.category}>
                {category.category}
            </option>
        ));

        return (
            <div>
                <select onChange={(e) => handleArticleChange(index, 'category', e.target.value)}>
                    {articleOptions}
                </select>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => handleArticleChange(index, 'title', e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    onChange={(e) => handleArticleChange(index, 'content', e.target.value)}
                />
            </div>
        );
    };

    const renderArticleSelection = () => {
        const articleSelections = [];

        for (let i = 0; i < numArticles; i++) {
            articleSelections.push(
                <div key={i} className="article-selection">
                    <p>Article {i + 1}</p>
                    {renderArticleSelector(i)}
                </div>
            );
        }
        return articleSelections;
    };

    return (
        <div>
            <h1>Submit News Articles</h1>
            <p>Select the number of articles:</p>
            <input
                type="number"
                value={numArticles}
                onChange={(e) => setNumArticles(parseInt(e.target.value, 10))}
            />

            <button onClick={() => setShowArticleSelection(true)}>Select Articles</button>

            {showArticleSelection && (
                <div>
                    <h2>Article Submission</h2>
                    {renderArticleSelection()}
                    <button onClick={handleSubmit}>Submit Articles</button> {/* Submit button */}
                </div>
            )}
        </div>
    );
};

export default NewsSubmission;
