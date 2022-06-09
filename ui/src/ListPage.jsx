import React, { useState, useEffect } from 'react';
import { 
    f7,
    Page,
    Navbar,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Link
} from 'framework7-react';
import './Cards.css';

var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5';
const WarningAlertTitle = '<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';

const ListPage = ({ myPokemonList, f7router }) => {
    const [consumePokeapi, setConsumePokeapi] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [showPreloader, setShowPreloader] = useState(true);
    const listItem = [];

    const loadMore = () => { if (!consumePokeapi) setConsumePokeapi(true) }
    
    const getPokemonDetail = (pokeapiResultsArray) => {
        pokeapiResultsArray.forEach(element => {
            fetch(element.url, {method: 'GET'})
            .then((response) => response.json())
            .then((response) => {
                if (response.sprites.length <= 0) {
                    f7.dialog.alert(
                        "Data from Pokeapi can't be processed",
                        WarningAlertTitle
                    );
                    setShowPreloader(false);
                    console.error('error: sprites from pokeapi is not an array\nsprites:', response.sprites);
                    return;
                }
                if (!Array.isArray(response.moves) || response.moves.length <= 0) {
                    f7.dialog.alert(
                        "Data from Pokeapi can't be processed",
                        WarningAlertTitle
                    );
                    setShowPreloader(false);
                    console.error('error: moves from pokeapi is not an array\nmoves:', response.moves);
                    return;
                }
                if (!Array.isArray(response.types) || response.types.length <= 0) {
                    f7.dialog.alert(
                        "Data from Pokeapi can't be processed",
                        WarningAlertTitle
                    );
                    setShowPreloader(false);
                    console.error('error: types from pokeapi is not an array\ntypes:', response.types);
                    return;
                }
                setPokemonList(state => [
                    ...state,
                    {
                        title: response.name,
                        subtitle: response.id,
                        slot: 'media',
                        src: response.sprites.other.dream_world.front_default,
                        width: '44',
                        moves: response.moves,
                        types: response.types,
                        alt: `artwork of ${response.name}`,
                    }
                ]);
            })
            .catch(error => {
                f7.dialog.alert(
                    'Pokeapi error',
                    WarningAlertTitle
                );
                setShowPreloader(false);
                console.error('error:', error);
                return;
            });
        });
    }

    useEffect(() => {
        fetch(pokeapiUrl, {method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
            setConsumePokeapi(false);
            if (Array.isArray(response.results) && response.results.length > 0) {
                console.info('info: render pokemon data from', pokeapiUrl);
                pokeapiUrl = response.next;
                getPokemonDetail(response.results);
                return;
            }
            f7.dialog.alert(
                "Data from Pokeapi can't be processed",
                WarningAlertTitle
            );
            setShowPreloader(false);
            console.error('error: results from pokeapi is not an array');
        })
        .catch(error => {
            f7.dialog.alert(
                'Pokeapi error',
                WarningAlertTitle
            );
            setConsumePokeapi(false);
            setShowPreloader(false);
            console.error('error:', error);
        });
    }, [consumePokeapi, myPokemonList]);

    pokemonList.forEach(element => {
        listItem.push(
           <Card className="pokemon-card-header-pic">
                <CardHeader
                    className="no-border"
                    valign="bottom"
                    style={{
                        backgroundImage: `url(${element.src})`,
                    }}
                />
                <CardContent>
                    <h1>{element.title.charAt(0).toUpperCase() + element.title.slice(1)}</h1>
                </CardContent>
                <CardFooter>
                    <Link onClick={() => {
                        f7router.navigate('/detail/', {
                            props: {
                                myPokemonList: myPokemonList,
                                title: element.title.charAt(0).toUpperCase() + element.title.slice(1),
                                src: element.src,
                                moves: element.moves,
                                types: element.types,
                            }
                        });
                    }}><h3>Detail</h3></Link>
                </CardFooter>
            </Card>
        );
    });

    return (
        <Page 
            name="list"
            infinite
            infiniteDistance={50}
            infinitePreloader={showPreloader}
            onInfinite={loadMore}
            onPageAfterOut={() => {
                pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5';
            }}
        >
            <Navbar title="Pokemon List">
                <Link slot="right" onClick={() => {
                    f7router.navigate('/mypokemon/', {
                        props: {
                            myPokemonList: myPokemonList
                        }
                    });
                }}>My Pokemon</Link>
            </Navbar>
            {listItem}
        </Page>
    )
}

export default ListPage;