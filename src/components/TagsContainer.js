import React from 'react'

function TagsContainer() {

    var popularTags = [
        { id: 1, tagName: "Tag Name", tagUses: "100" },
        { id: 2, tagName: "Tag Name", tagUses: "100" },
        { id: 3, tagName: "Tag Name", tagUses: "100" },
        { id: 4, tagName: "Tag Name", tagUses: "100" },
        { id: 5, tagName: "Tag Name", tagUses: "100" },
    ];

    var tags = [
        { id: 1, tagName: "Tag Name", tagUses: "100" },
        { id: 2, tagName: "Tag Name", tagUses: "100" },
        { id: 3, tagName: "Tag Name", tagUses: "100" },
        { id: 4, tagName: "Tag Name", tagUses: "100" },
        { id: 5, tagName: "Tag Name", tagUses: "100" },
        { id: 6, tagName: "Tag Name", tagUses: "100" },
        { id: 7, tagName: "Tag Name", tagUses: "100" },
    ];

    return (
        <>
            <div className="flex-container my-2 mx-3 p-2 border rounded shadow">
                <div className="row">
                    <form className='form-inline d-flex flex-nowrap'>
                        <input className='form-control mr-sm-2' type="search" placeholder="Search tags" aria-label='Search' />
                    </form>
                </div>
                <div className="row">
                    <ul className='list-group-horizontal d-flex flex-wrap justify-content-center align-items-start list-unstyled my-2 px-4'>
                        {
                            popularTags.map(
                                tag =>
                                    <li key={tag.id} className='list-group-item d-flex justify-content-between align-items-center border border-dark rounded-5 p-1 m-1 text-light bg-dark'>
                                        <span className='px-1'>{tag.tagName}</span>
                                        <span className='badge bg-secondary mx-1'>{tag.tagUses}</span>
                                    </li>
                            )
                        }
                    </ul>
                </div>
                <div className="row">
                    <ul className='list-group list-unstyled my-2 px-4'>

                        {tags.map(
                                tag =>
                                    <li key={tag.id} className='my-1'>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                                <span className='px-2'>{tag.tagName}</span>
                                            </div>
                                        </div>
                                    </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TagsContainer