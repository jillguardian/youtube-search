import React from 'react';
import Search from "./Search";

const App = () => {
    return (
        <div className="ui container">
            <div className="ui equal width center aligned padded grid">
                <div className="row">
                    <div className="column">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;