#!/usr/bin/python3
""" a script that lists all Cities objects, and their corresponding State
from the database hbtn_0e_100_usa """
from sys import argv
from relationship_state import Base, City
from sqlalchemy import (create_engine)
from sqlalchemy.orm import sessionmaker


def main(argv):
    """ main function """
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                            argv[1], argv[2], argv[3]), pool_pre_ping=True)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    for c in session.query(City).order_by(City.id.asc()):
        print(c.id, ': ', c.name, " -> ", c.state.name, sep='')
    session.close()


if __name__ == '__main__' and len(argv) == 4:
    main(argv)
