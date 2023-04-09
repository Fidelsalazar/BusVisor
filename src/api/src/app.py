from flask import Flask
from flask_cors import CORS
from config import config

#Rutas
from routes import Bus
from routes import BusLine
from routes import User

app = Flask(__name__)
CORS(app)

#@app.route("/")
#def hello():
#  return "<h1 style = 'color:blue'>Hello There!</hi>"

def page_not_found(error):
  return "<h1>Not found page</h1>"


if __name__ == "__main__":
  app.config.from_object(config['develoment'])

    #Blueprints(asignar rutas)
  app.register_blueprint(Bus.main,url_prefix='/api/bus')
  app.register_blueprint(BusLine.main,url_prefix='/api/busline')
  app.register_blueprint(User.main,url_prefix='/api/user')
    #Manejador de errores
  app.register_error_handler(404, page_not_found)

  app.run( )
