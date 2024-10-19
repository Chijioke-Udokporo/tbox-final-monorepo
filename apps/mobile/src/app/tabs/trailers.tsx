//import { useTrailers } from "@/src/hooks/useTrailers";
import { useTrailersStore } from "@/src/stores/trailers.store";
import { useEffect } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { globalStyles } from "@/src/styles/global";
import { TrailerHeader, TrailerItem } from "@/src/ui";
import { TrailerSlider } from "@/src/ui/card/trailer.slider";

export default function Trailers() {
  const { trailers, trailerMeta } = useTrailersStore();
  /*   const { isPending, refetch } = useTrailers(); */

  return (
    <View style={globalStyles.flex}>
      {/* <TrailerHeader />
      <View style={globalStyles.flex}>
        <View style={[globalStyles.flex]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
               refreshControl={<RefreshControl refreshing={isPending} onRefresh={refetch} />} 
          >
            <TrailerSlider trailers={trailers?.slice(0, 4)} />
            <TrailerItem trailers={trailers} />
          </ScrollView>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  trailer: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});
