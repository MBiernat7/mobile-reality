import React from 'react';
import {ScrollView} from 'react-native';

import {Shared} from '../components/Shared';
import {Grid} from '../components/Grid';
import {WorkProfile} from '../components/WorkProfile';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <Shared
        navigation={navigation}
        title="kilka slów o nas"
        subtitle="czyli kim jesteśmy i dokąd zmierzamy"
      />
      <Grid />
      <WorkProfile />
      <Shared
        navigation={navigation}
        title="nasza oferta"
        subtitle="dowiedz się co możemy tobie zaoferować"
      />
    </ScrollView>
  );
};

export default HomeScreen;
