export const CODE_FLASK = `
\`\`\`py
from flask import Flask, request
from flask.blueprints import Blueprint
import json
from somewhere import username, password

app = Flask(__name__)
v1auth = Blueprint("v1auth", __name__, url_prefix="/api/v1/auth")

@v1auth.post("/login")
def login():
    data = request.get_json(silent=True) or {}
    if data.get("username") == username and data.get("password") == password:
        return json.dumps({"ok": True})
    return json.dumps({"ok": False, "error": "Invalid credentials"}), 401

app.register_blueprint(v1auth)
app.run(port=8101)
\`\`\`
`

export const CODE_NAUTICA = `
\`\`\`py
from napi.http import HTTP, Context, Reply
from somewhere import username, password

@HTTP.POST()
@HTTP.Require(body = {"username": str, "password": str})
def login(ctx: Context):
    if ctx.body["username"] == username and ctx.body["password"] == password:
        return Reply(ok=True)
    return Reply(ok=False, error="Invalid credentials"), 401
\`\`\`
`