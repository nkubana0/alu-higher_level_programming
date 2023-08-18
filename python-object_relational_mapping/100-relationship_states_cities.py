#!/usr/bin/python3
""" a script that creates the State “California” with the City “San Francisco”
from the database hbtn_0e_100_usa """
import sys
from relationship_state import Base, State, City
from sqlalchemy import (create_engine)
from sqlalchemy.orm import sessionmaker


def main(argv):
    """ main function """
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
                            argv[1], argv[2], argv[3]), pool_pre_ping=True)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    p = State(name='California')
    c = City(name='San Francisco')
    p.cities.append(c)
    session.add(p)
    session.commit()
    session.close()


if __name__ == '__main__' and len(sys.argv) == 4:
    main(sys.argv)
