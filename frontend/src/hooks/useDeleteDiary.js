import { useState } from 'react';
import axios from 'axios';

const useDeleteDiary = (initialDiaries) => {
    const [diaries, setDiaries] = useState(initialDiaries);

    const deleteDiary = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/plant-diaries/${id}`);
            setDiaries(diaries.filter(diary => diary._id !== id));
        } catch (err) {
            console.error('Error deleting diary:', err);
        }
    };

    return { diaries, deleteDiary };
};

export default useDeleteDiary;
