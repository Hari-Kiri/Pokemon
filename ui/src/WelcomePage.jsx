import React, { useState } from 'react';
import { 
    f7,
    Page, 
    Gauge 
} from 'framework7-react';

const WarningAlertTitle = '<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';

const WelcomePage = ({f7router}) => {
    const [gaugeValue, setGaugeValue] = useState(0);

    const openListPage = () => {
        document.fonts.load('28px Framework7 Icons')
        .then(() => {
            setGaugeValue(0.97);
        })
        .then(() => {
            f7router.navigate('/list/',{
                props: {
                    myPokemonList: []
                }
            });
        })
        .catch(error => {
            f7.dialog.alert(
                'Failed opening list page. Please reload the browser.',
                WarningAlertTitle
            );
            console.error('error:', error);
        });
    };
    
    return (
        <Page 
            name="welcome"
            onPageAfterIn={() => {
                setGaugeValue(0.64);
                openListPage();
            }}
            onPageBeforeOut={() => {
                setGaugeValue(1);
            }}
        >
            <div class="page-content display-flex flex-direction-column justify-content-center">
                <div class="text-align-center">
                    <Gauge
                        type="circle"
                        value={gaugeValue}
                        size={250}
                        borderColor="#ff2d55"
                        borderWidth={10}
                        valueText={`${gaugeValue * 100}%`}
                        valueFontSize={41}
                        valueTextColor="#ff2d55"
                        labelText="Loading assets"
                    />
                </div>
            </div>
        </Page>
    )
}

export default WelcomePage;