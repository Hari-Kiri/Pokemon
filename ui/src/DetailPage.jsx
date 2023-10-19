import React, { useEffect, useState } from 'react';
import {
    Page,
    Navbar,
    Link,
    BlockTitle,
    Chip,
    Card,
    CardHeader,
    CardContent,
    Fab,
    Icon,
    f7
} from 'framework7-react';
import './Cards.css';

const SuccessAlertTitle = '<i class="icon f7-icons color-green" style="font-size: 35px;">checkmark_alt</i>';
const WarningAlertTitle = '<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';
const ErrorAlertTitle = '<i class="icon f7-icons color-red" style="font-size: 35px;">xmark</i>';

const DetailPage = ({ myPokemonList, title, src, moves, types, f7router }) => {
    const chipMoves = [];
    moves.forEach(element => {
        chipMoves.push(
            <Chip key={element.move.name} text={element.move.name} />
        )
    });

    const chipTypes = [];
    types.forEach(element => {
        chipTypes.push(
            <Chip key={element.type.name} text={element.type.name} />
        );
    });

    const [listOfCatchedPokemon, setListOfCatchedPokemon] = useState(myPokemonList);
    const [temporaryListOfCatchedPokemon, setTemporaryListOfCatchedPokemon] = useState(listOfCatchedPokemon.filter((element) => { 
        return element.species === title;
    }));
    const arrayPokemonSpeciesIndex = temporaryListOfCatchedPokemon.map(element => element.species);
    const arrayPokemonSpeciesLastIndex = arrayPokemonSpeciesIndex.lastIndexOf(title);
    const arrayPokemonSpeciesBeforeLastIndex = arrayPokemonSpeciesIndex.lastIndexOf(title) - 1;
    const catchPokemon = () => {
        f7.dialog.preloader('Catching Pokemon...');
        fetch('/pokemon/catch', {method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            if (!response.response) {
                f7.dialog.close();
                f7.dialog.alert(`Failed catching ${title}`, WarningAlertTitle);
                return;
            }
            f7.dialog.close();
            f7.dialog.alert(
                `${title} catched`,
                SuccessAlertTitle,
                () => {
                    if (arrayPokemonSpeciesLastIndex === -1 && arrayPokemonSpeciesBeforeLastIndex === -2) {
                        setListOfCatchedPokemon(state => [
                            ...state,
                            {
                                species: title,
                                nickname: `Mighty ${title}`,
                                src: src,
                                moves: moves,
                                types: types,
                            }
                        ]);
                        setTemporaryListOfCatchedPokemon(state => [
                            ...state,
                            {
                                species: title,
                                nickname: `Mighty ${title}`,
                                src: src,
                                moves: moves,
                                types: types,
                            }
                        ]);
                        return;
                    }
                    if (arrayPokemonSpeciesLastIndex === 0 && arrayPokemonSpeciesBeforeLastIndex === -1) {
                        f7.dialog.preloader(`Add ${title} to your Pokemon list...`);
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                previousNickname: null,
                                currentNickname: temporaryListOfCatchedPokemon[arrayPokemonSpeciesLastIndex].nickname
                            })
                        };
                        fetch('/pokemon/getnickname', requestOptions)
                        .then((response) => response.json())
                        .then((response) => {
                            if (!response.response) {
                                f7.dialog.close();
                                f7.dialog.alert(`Failed to add ${title} into your Pokemon list`, WarningAlertTitle);
                                return;
                            }
                            f7.dialog.close();
                            f7.dialog.alert(`Successfully put ${title} into your Pokemon list`, SuccessAlertTitle);
                            setListOfCatchedPokemon(state => [
                                ...state,
                                {
                                    species: title,
                                    nickname: response.nickname,
                                    src: src,
                                    moves: moves,
                                    types: types,
                                }
                            ]);
                            setTemporaryListOfCatchedPokemon(state => [
                                ...state,
                                {
                                    species: title,
                                    nickname: response.nickname,
                                    src: src,
                                    moves: moves,
                                    types: types,
                                }
                            ]);
                        })
                        .catch(error => {
                            f7.dialog.close();
                            f7.dialog.alert(
                                `Failed to get ${title} into your Pokemon list because add api error`, ErrorAlertTitle);
                            console.error('error:', error);
                        });
                        return;
                    }
                    f7.dialog.preloader(`Add ${title} to your Pokemon list...`);
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            previousNickname: temporaryListOfCatchedPokemon[arrayPokemonSpeciesBeforeLastIndex].nickname,
                            currentNickname: temporaryListOfCatchedPokemon[arrayPokemonSpeciesLastIndex].nickname
                        })
                    };
                    fetch('/pokemon/getnickname', requestOptions)
                    .then((response) => response.json())
                    .then((response) => {
                        if (!response.response) {
                            f7.dialog.close();
                            f7.dialog.alert(`Failed to add ${title} into your Pokemon list`, WarningAlertTitle);
                            return;
                        }
                        f7.dialog.close();
                        f7.dialog.alert(`Successfully put ${title} into your Pokemon list`, SuccessAlertTitle);
                        setListOfCatchedPokemon(state => [
                            ...state,
                            {
                                species: title,
                                nickname: response.nickname,
                                src: src,
                                moves: moves,
                                types: types,
                            }
                        ]);
                        setTemporaryListOfCatchedPokemon(state => [
                            ...state,
                            {
                                species: title,
                                nickname: response.nickname,
                                src: src,
                                moves: moves,
                                types: types,
                            }
                        ]);
                    })
                    .catch(error => {
                        f7.dialog.close();
                        f7.dialog.alert(
                            `Failed to get ${title} into your Pokemon list because add api error`, ErrorAlertTitle);
                        console.error('error:', error);
                    });
                }
            );
        })
        .catch(error => {
            f7.dialog.close();
            f7.dialog.alert(
                `Failed catching ${title} because catch api error`,
                ErrorAlertTitle
            );
            console.error('error:', error);
        });
    }

    useEffect(() => {
        console.info('info detail page: all catched pokemon', listOfCatchedPokemon);
        console.info(`info detail page: catched ${title}`, temporaryListOfCatchedPokemon);
    }, [listOfCatchedPokemon, title, temporaryListOfCatchedPokemon]);

    return (
        <Page name="detail">
            <Navbar title={`Detail of ${title}`}>
                <Link slot="left" iconF7="arrowshape_turn_up_left_fill" onClick={() => {
                    f7router.navigate('/list/', {
                        props: {
                            myPokemonList: listOfCatchedPokemon
                        }
                    });
                }}></Link>
                <Link slot="right" onClick={() => {
                    f7router.navigate('/mypokemon/', {
                        props: {
                            myPokemonList: listOfCatchedPokemon
                        }
                    });
                }}>My Pokemon</Link>
            </Navbar>
            <Fab position="center-bottom" slot="fixed" text="Catch" color="pink" onClick={() => {
                catchPokemon();
            }}>
                <Icon ios="f7:plus"></Icon>
            </Fab>
            <Card className="pokemon-card-header-pic">
                <CardHeader
                    className="no-border"
                    valign="bottom"
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                />
                <CardContent>
                    <BlockTitle>Moves</BlockTitle>
                    {chipMoves}
                    <BlockTitle>Types</BlockTitle>
                    {chipTypes}
                </CardContent>
            </Card>
        </Page>
    )
}

export default DetailPage;