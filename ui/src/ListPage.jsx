import React, { useState, useEffect, useCallback } from 'react';
import { 
    f7,
    Page,
    Navbar,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Link,
    Row,
    Col
} from 'framework7-react';
import './Cards.css';

var pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5';
const WarningAlertTitle = '<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';

const ListPage = ({ myPokemonList, f7router }) => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const getPokemonDetail = useCallback((pokeapiResultsArray) => {
        for (let i = 0; i < pokeapiResultsArray.length; i++) {
            fetch(pokeapiResultsArray[i].url, {method: 'GET'})
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
        }
    }, []);

    const [consumePokeapi, setConsumePokeapi] = useState(true);
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
    }, [consumePokeapi, myPokemonList, getPokemonDetail]);

    const [listItem, setListItem] = useState([]);
    useEffect(() => {
        let listItemElement = [];
        for (let i = 0; i < pokemonList.length; i++) {
            listItemElement.push(
                <Col key={pokemonList[i].subtitle} width="100" medium="50" large="25" xlarge="20">
                    <Card className="pokemon-card-header-pic">
                        <CardHeader
                            className="no-border"
                            valign="bottom"
                            style={{
                                backgroundImage: `url(${pokemonList[i].src})`,
                                height: "200px"
                            }}
                        />
                        <CardContent>
                            <h1>{pokemonList[i].title.charAt(0).toUpperCase() + pokemonList[i].title.slice(1)}</h1>
                        </CardContent>
                        <CardFooter>
                            <Link onClick={() => {
                                f7router.navigate('/detail/', {
                                    props: {
                                        myPokemonList: myPokemonList,
                                        title: pokemonList[i].title.charAt(0).toUpperCase() + pokemonList[i].title.slice(1),
                                        src: pokemonList[i].src,
                                        moves: pokemonList[i].moves,
                                        types: pokemonList[i].types,
                                    }
                                });
                            }}><h3>Detail</h3></Link>
                        </CardFooter>
                    </Card>
                </Col>
            );
        }
        setListItem(listItemElement);
    }, [f7router, myPokemonList, pokemonList]);

    const loadMore = useCallback(() => { 
        if (!consumePokeapi) setConsumePokeapi(true);
    }, [consumePokeapi]);

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
            <Row>
                {listItem}
            </Row>
        </Page>
    )
}

export default ListPage;