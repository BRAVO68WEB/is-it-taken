use napi_derive::*;

#[napi]
pub fn check(name: String) -> bool {
    let url = format!("https://registry.npmjs.org/{}/latest", name);
    let res = ureq::get(&url).call();
    let check = res.is_ok();

    return !check;
}