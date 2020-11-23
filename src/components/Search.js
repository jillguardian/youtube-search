import React, {useState} from 'react'

export default function Search({onSearch}) {

    const [term, setTerm] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search video..."
                        onChange={event => setTerm(event.target.value)}
                        value={term}/>
                    <i className="search icon"/>
                </div>
            </div>
        </form>
    );

}