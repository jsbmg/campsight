use std::path::Path;
#[macro_use] extern crate rocket;
use rocket::fs::{ FileServer, relative };

mod api_handler;

static DATE: &str = "2022-07-01T00%3A00%3A00.000Z";
const USER_AGENT: &str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36";
const URL: &str = "https://www.recreation.gov/api/camps/availability/campground/272300/month?";

#[get("/")]
async fn index() {
}


#[launch]
fn rocket() -> _ {
    println!("{:?}", relative!("client/.next/public"));
    rocket::build()
        .mount("/", routes![index])
        .mount("/", FileServer::from(relative!("client/.next/static")))
}
