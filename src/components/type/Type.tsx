const TypeDiv = ({ type }: { type: string }) => {
    switch (type) {
        case 'NORMAL':
            return (
                <div className="bg-slate-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )

        case 'FIGHTING':
            return (
                <div className="bg-amber-800 rounded-md text-center p-2 text-xs max-w-">
                    <span>{type}</span>
                </div>
            )
        case 'FLYING':
            return (
                <div className="bg-blue-300 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'POISON':
            return (
                <div className="bg-purple-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'GROUND':
            return (
                <div className="bg-yellow-900 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'ROCK':
            return (
                <div className="bg-stone-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'BUG':
            return (
                <div className="bg-green-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'GHOST':
            return (
                <div className="bg-blue-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'GHOST':
            return (
                <div className="bg-blue-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            )
        case 'STEEL':
            return (
                <div className="bg-gray-700 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'FIRE':
            return (
                <div className="bg-red-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'WATER':
            return (
                <div className="bg-blue-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'GRASS':
            return (
                <div className="bg-green-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'ELECTRIC':
            return (
                <div className="bg-yellow-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'PSYCHIC':
            return (
                <div className="bg-purple-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'ICE':
            return (
                <div className="bg-blue-200 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'DRAGON':
            return (
                <div className="bg-indigo-500 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'DARK':
            return (
                <div className="bg-gray-800 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'FAIRY':
            return (
                <div className="bg-pink-300 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'UNKNOWN':
            return (
                <div className="bg-gray-400 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        case 'SHADOW':
            return (
                <div className="bg-gray-600 rounded-md text-center p-2 text-xs max-w-16">
                    <span>{type}</span>
                </div>
            );
        default:
            return null;
    }
}

export default TypeDiv;