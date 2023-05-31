import { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";
import { useCharacterContext } from "../../context/characterContext";
import { DotLoader } from "react-spinners";

export default function Characters() {
  const { characters, paginado, page, resultFetch, loading } =
    useCharacterContext();

  useEffect(() => {
    resultFetch();
  }, [page]);

  return (
    <>
      <Nav />
      <h1 className="textoAlineado">Characters</h1>
      {loading ? (
        <DotLoader
          className="loader"
          loading={loading}
          color="#ffd90f"
          size="180px"
        />
      ) : (
        <>
          <Grid
            container
            width="100%"
            sx={{
              p: 5
            }}
          >
            {characters?.map((item:any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={3}

                  
                >
                  <Card key={item.id} resultFetch={item} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            sx={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ m: 3, p: 1 }}
              onClick={() => paginado(-1)}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              sx={{ m: 3, p: 1 }}
              onClick={() => paginado(1)}
            >
              Next
            </Button>
          </Grid>
        </>
      )}
    </>
  );
}
