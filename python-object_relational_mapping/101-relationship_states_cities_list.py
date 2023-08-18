#!/usr/bin/python3
""" a script that all State objects, and corresponding City objects
from the database hbtn_0e_100_usa """
from sys import argv
from relationship_state import Base, State
from sqlalchemy import (create_engine)
from sqlalchemy.orm import sessionmaker


def main(argv):
    """ main function """
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                            argv[1], argv[2], argv[3]), pool_pre_ping=True)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    for st in session.query(State).order_by(State.id.asc()):
        print(st.id, ': ', st.name, sep='')
        for c in st.cities:
            print("\t", c.id, ': ', c.name, sep='')
    session.close()


if __name__ == '__main__' and len(argv) == 4:
    main(argv)
