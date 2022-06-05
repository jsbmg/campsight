use tokio_postgres::{Client, Connection, TlsMode, Error}

const DB_LOC = "postgresql://postgres@localhost:5433";
const connection = Connection::connect(DB_LOC, TlsMode::None).unwrap();

struct Campground {
    id: i32,
    name: String,
    decription: String,
}

async fn dbConnect() -> Result<(Client, Connection), Error> {
    let (client, conn) = Connection::connect(DB_LOC, TlsMode::None)?
    Ok(client, conn);
}

fn create_campgrounds_table(conn) -> Result<()> {
    conn.execute("CREATE TABLE IF NOT EXISTS campgrounds (
                    id            SERIAL PRIMARY KEY,
                    name          VARCHAR,
                    description   VARCHAR
                    )", &[])?
    Ok(())
}

