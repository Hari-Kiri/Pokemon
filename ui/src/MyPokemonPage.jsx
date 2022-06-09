import React, { useEffect, useState } from "react";
import { 
    f7,
    Page,
    Navbar,
    Link,
    BlockTitle,
    List,
    ListItem,
    SwipeoutActions,
    SwipeoutButton
} from "framework7-react";

const SuccessAlertTitle = '<i class="icon f7-icons color-green" style="font-size: 35px;">checkmark_alt</i>';
const WarningAlertTitle = '<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';
const ErrorAlertTitle = '<i class="icon f7-icons color-red" style="font-size: 35px;">xmark</i>';

const MyPokemonPage = ({ myPokemonList, f7router }) => {
    const listOfPokemon = [];
    const [listOfCatchedPokemon, setListOfCatchedPokemon] = useState(myPokemonList);
    const indexOfPokemon = listOfCatchedPokemon.map(element => element.nickname);

    listOfCatchedPokemon.forEach(element => {
        listOfPokemon.push(
            <ListItem swipeout title={element.nickname} subtitle={element.species}>
                <SwipeoutActions right>
                    <SwipeoutButton color="red" onClick={() => {
                        f7.dialog.preloader(`Releasing ${element.nickname}...`);
                        fetch('/pokemon/release', {method: 'GET'})
                        .then((response) => response.json())
                        .then((response) => {
                            f7.dialog.close()
                            if (!response.response) {
                                f7.dialog.alert(`${element.nickname} do not wanna go from You`, WarningAlertTitle);
                                console.info('info: release result', response.response);
                                return;
                            }
                            f7.dialog.alert(`You have ${element.nickname} let go`, SuccessAlertTitle, () => {
                                let temporaryPokemonList = [...listOfCatchedPokemon];
                                temporaryPokemonList.splice(indexOfPokemon.indexOf(element.nickname), 1);
                                setListOfCatchedPokemon(temporaryPokemonList);
                            });
                            console.info('info: release result', response.response);
                        })
                        .catch(error => {
                            f7.dialog.alert('Pokeapi error', ErrorAlertTitle);
                            console.error('error:', error);
                        });
                    }}>
                        Release
                    </SwipeoutButton>
                </SwipeoutActions>
            </ListItem>
        );
    });

    useEffect(() => {
        console.info('info my pokemon page: all catched pokemon', listOfCatchedPokemon)
    }, [listOfCatchedPokemon]);

    return (
        <Page name="mypokemon">
            <Navbar title="My Pokemon List">
                <Link slot="left" iconF7="arrowshape_turn_up_left_fill" onClick={() => {
                    f7router.navigate('/list/', {
                        props: {
                            myPokemonList: listOfCatchedPokemon
                        }
                    });
                }}></Link>
            </Navbar>
            <BlockTitle>Swipe to left for release button</BlockTitle>
            <List>{listOfPokemon}</List>
        </Page>
    )
}

export default MyPokemonPage;