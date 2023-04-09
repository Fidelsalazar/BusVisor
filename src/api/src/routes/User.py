from flask import  Blueprint, request
from utils.function_jwt import write_token,validate_token


main = Blueprint('user_print', __name__)

@main.route('/login', methods=["POST"])
def login():
    data = request.get_json()
    if (data.user == "fidelsalazar990923@gmail.com"): 
        if(data.password == "1234"):
            return jsonify({
                'status':'ok',
                'token': write_token(data=request.get_json()),
                'rol': 'admin'
            }) 
            
    else:
        jsonify({})

@main.route("/verify/token")
def verify_token():
    token=request.headers['Autentization'].split("")[1]
    return validate_token(token, output=True)
