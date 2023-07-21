use neon::prelude::*;

fn check(name: String) -> bool {
    let url = format!("https://registry.npmjs.org/{}/latest", name);
    let res = ureq::get(&url).call();
    return res.is_ok()
}

fn check_if_npms_exists(mut cx: FunctionContext) -> JsResult<JsBoolean> {
    let name = cx.argument::<JsString>(0)?;
    let name = name.value(&mut cx);
    let result = check(name);
    Ok(cx.boolean(result))
}


#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("check_if_npms_exists", check_if_npms_exists)?;
    Ok(())
}
