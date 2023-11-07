const List = () => {
    const items = [
        {
            id: 1,
            name: 'Bernardo',
        },
        {
            id: 2,
            name: 'Carlos',
        },
        {
            id: 3,
            name: 'Fernando',
        },
    ];

    return (
        <div>
            {items.map((item) => {
                return (
                    <p key={item.id}>{item.name}</p>
                );
            })}
        </div>
    );
};

export default List;