import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

function ContinentList({ continent, onSelect }) {

    const primary = red[900];

    const handleContinentClick = (continent) => {
        onSelect(continent);
    };

    return (
        <div className="continent-list">
            <h2 className='country-list-h2'>All destinations</h2>
            <Stack direction="column" spacing={.10}>
                {continent.map((continent, value) => (
                    <div key={value}>
                        <Button 
                            size='small'
                            variant='text' 
                            sx={{ fontFamily: "Poppin", color: primary}}
                            onClick={() => handleContinentClick(continent)}>
                            {continent}
                        </Button>
                    </div>
                ))}
            </Stack>
        </div>
    );
}

export default ContinentList;
