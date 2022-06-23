import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex items-center justify-center mt-24">
                <div class="w-16 h-16 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;