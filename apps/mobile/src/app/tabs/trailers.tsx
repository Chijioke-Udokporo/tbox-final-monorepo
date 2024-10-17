import useTrailers from "@/src/hooks/useTrailers";
import { useTrailersStore } from "@/src/stores/trailers.store";
import { useEffect } from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { globalStyles } from "@/src/styles/global";
import { TrailerHeader, TrailerItem } from "@/src/ui";
import { Avatar, Typo } from "@/src/components";

export default function Trailers() {
  const { trailers, trailerMeta } = useTrailersStore();
  const { Trailers, loading, onRefetch } = useTrailers();

  useEffect(() => {
    Trailers();
  }, []);
  return (
    <View style={globalStyles.container}>
      <TrailerHeader />
      <View style={globalStyles.flex}>
        <View style={[globalStyles.flex]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefetch} />}
          >
            <TrailerItem trailers={trailers} />
          </ScrollView>
        </View>
      </View>
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
