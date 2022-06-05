use std::error;

use reqwest;

pub async fn request(url: &str, user_agent: &str, params: &str)
    -> Result<String, Box<dyn error::Error>> {
    let mut parsed_url = reqwest::Url::parse(url)?;
    parsed_url.set_query(Some(params));

    let client = reqwest::Client::builder()
        .user_agent(user_agent)
        .build()?;

    let body = client.get(parsed_url.as_str())
        .send()
        .await?
        .text()
        .await?;

    Ok(body)
}
