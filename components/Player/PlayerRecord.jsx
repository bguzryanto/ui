import React from 'react';
import Error from '../Error';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { player } from '../../reducers';
// import styles from './PlayerHeader.css';
import SocialPoll from 'material-ui/svg-icons/social/poll';
import { green500 } from 'material-ui/styles/colors';

export const PlayerRecord = ({ loading, error, wins, losses }) => {
  const getPlayerRecord = () => {
    if (error) return <Error />;
    if (loading) return <Spinner />;
    return (
      <div>
        <span>
          <SocialPoll color={green500} />
          <span>{wins}</span>
          <span> - </span>
          <span>{losses}</span>
          <span>{` (${(wins / (wins + losses) * 100).toFixed(2)}%)`}</span>
        </span>
      </div>
    );
  };

  return (
    <div>
      {getPlayerRecord()}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: player.getLoading(state, ownProps.playerId),
  error: player.getError(state, ownProps.playerId),
  wins: player.getWins(state, ownProps.playerId),
  losses: player.getLosses(state, ownProps.playerId),
});


export default connect(mapStateToProps)(PlayerRecord);
