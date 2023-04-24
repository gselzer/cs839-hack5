import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

function Model(props) {
  // const { scene } = useGLTF("/suzanne-draco.glb");
  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf"
  );
  // const { scene } = useGLTF("https://revitfam-request-product-gatsby.s3.us-east-2.amazonaws.com/public/fe9b7300-a4e1-11ec-a747-bd3238739599.gltf");
  // const { scene } = useGLTF("https://revitfam-request-product-gatsby.s3.us-east-2.amazonaws.com/public/fe9b7300-a4e1-11ec-a747-bd3238739599.gltf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAMbBqsY4u%2FjYeoqF8TrVIYbXWpX%2B7syqrLQ%2ByeIQHDY6AiBdx8XaM%2BteHiKyyXmAsFXWI2H%2BtU7mOcLnu9U5x2F8XCr7AghEEAIaDDE1MjA1OTE0NzMxOCIMbwaxoztTtAXu5sjsKtgC9hKyw0vgOJf1nvWRoqZwLQliU%2Bm8gUpIUECzMm5DuCXhDfsQnl3KED9igWsdELQwm9fyOHC7ckzVwB137hkeSVyBKG2FApw60AeElZqg%2F0TIotlg%2FLPGYwsm53%2FUc%2BPpwUMtpkbUZJ9eQOTwyztxBLMR88p2lDaEZejJHhRt8Ta2t011%2Bb4SQDbRMCm0xmP6BeAP5VjCReB4XG6RfbIH9U7Cswdz2K2DcbRsdR0Zry7hsMFEm0DzJ0tjsteuHmhs6qwCm8Vxp08FhZefEMYVkCUzZAuCJIu4IbnLG5GxNQna9RGXb95MjDQFJ4StIjHqse%2BR%2BUWhe%2FYnGI6DQ5qyWp3y9oBMEVRI0nuxTb68%2FXQEUrTDYUHjEpmATxrX3aovz4VH3jEsMqSirxZkyz2za3XM04DPHynYyMB8WY5prQS9AAr0NDg0rwawW18IZD%2Fm14knclpYJwEw1q3qkQY6swJX5wqXEVNulH%2FtQKHRiMQUnyO7omlkhw5z9CWkRO0095%2BHaU%2F%2FgU9qb3Iv5WHK%2B1gJvAiT3spu4MyKQmAOeIHuBNTInXUMKI5W2NOIVw9EL1Q%2FHyB2LIj88qJQrxETLPCWtoBRNkUe5X%2BdXu9QZnvF1E4NW1tG981U1xhSTTK9yj0NhoUNUbHrF84wBStlpl5DBUqf6TnoFYk%2By1QXG9t5W4iD72yf5ymu7ge72vsmi1FBTvTmLSzSKuBrBa2SyK6Lj36M1KEMoY34xbd4zBuS8sePKNX6H%2FWV6AC5dbAze5sz06DF14WL%2BUXisoJL56sEbGaC5Xi0lz%2FutwhFBglF7RF73P3PhDxxNtia%2FlURfhVz%2B4G5XE7weMKLpwR61t%2BQcf4pfzO7XM%2FGn%2Ball1xkAaA4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220323T105954Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASGZ3OOQ3OQGBBWIP%2F20220323%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=4c30b4938e918773d66fbcabf13144549f4343f07076782d74d0fb15e6f8fb53");
  // const { scene } = useGLTF("https://revitfam-request-product-gatsby.s3.us-east-2.amazonaws.com/public/fe9b7300-a4e1-11ec-a747-bd3238739599.gltf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAMbBqsY4u%2FjYeoqF8TrVIYbXWpX%2B7syqrLQ%2ByeIQHDY6AiBdx8XaM%2BteHiKyyXmAsFXWI2H%2BtU7mOcLnu9U5x2F8XCr7AghEEAIaDDE1MjA1OTE0NzMxOCIMbwaxoztTtAXu5sjsKtgC9hKyw0vgOJf1nvWRoqZwLQliU%2Bm8gUpIUECzMm5DuCXhDfsQnl3KED9igWsdELQwm9fyOHC7ckzVwB137hkeSVyBKG2FApw60AeElZqg%2F0TIotlg%2FLPGYwsm53%2FUc%2BPpwUMtpkbUZJ9eQOTwyztxBLMR88p2lDaEZejJHhRt8Ta2t011%2Bb4SQDbRMCm0xmP6BeAP5VjCReB4XG6RfbIH9U7Cswdz2K2DcbRsdR0Zry7hsMFEm0DzJ0tjsteuHmhs6qwCm8Vxp08FhZefEMYVkCUzZAuCJIu4IbnLG5GxNQna9RGXb95MjDQFJ4StIjHqse%2BR%2BUWhe%2FYnGI6DQ5qyWp3y9oBMEVRI0nuxTb68%2FXQEUrTDYUHjEpmATxrX3aovz4VH3jEsMqSirxZkyz2za3XM04DPHynYyMB8WY5prQS9AAr0NDg0rwawW18IZD%2Fm14knclpYJwEw1q3qkQY6swJX5wqXEVNulH%2FtQKHRiMQUnyO7omlkhw5z9CWkRO0095%2BHaU%2F%2FgU9qb3Iv5WHK%2B1gJvAiT3spu4MyKQmAOeIHuBNTInXUMKI5W2NOIVw9EL1Q%2FHyB2LIj88qJQrxETLPCWtoBRNkUe5X%2BdXu9QZnvF1E4NW1tG981U1xhSTTK9yj0NhoUNUbHrF84wBStlpl5DBUqf6TnoFYk%2By1QXG9t5W4iD72yf5ymu7ge72vsmi1FBTvTmLSzSKuBrBa2SyK6Lj36M1KEMoY34xbd4zBuS8sePKNX6H%2FWV6AC5dbAze5sz06DF14WL%2BUXisoJL56sEbGaC5Xi0lz%2FutwhFBglF7RF73P3PhDxxNtia%2FlURfhVz%2B4G5XE7weMKLpwR61t%2BQcf4pfzO7XM%2FGn%2Ball1xkAaA4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220323T121524Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASGZ3OOQ3OQGBBWIP%2F20220323%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=c4166b9249a92aa661d1c97552cd56522cc00237d794397aec5a19b2e4881fc7");
  // const { scene } = useGLTF(
  //   "https://revitfam-request-product-gatsby.s3.us-east-2.amazonaws.com/public/fe9b7300-a4e1-11ec-a747-bd3238739599.gltf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAMbBqsY4u%2FjYeoqF8TrVIYbXWpX%2B7syqrLQ%2ByeIQHDY6AiBdx8XaM%2BteHiKyyXmAsFXWI2H%2BtU7mOcLnu9U5x2F8XCr7AghEEAIaDDE1MjA1OTE0NzMxOCIMbwaxoztTtAXu5sjsKtgC9hKyw0vgOJf1nvWRoqZwLQliU%2Bm8gUpIUECzMm5DuCXhDfsQnl3KED9igWsdELQwm9fyOHC7ckzVwB137hkeSVyBKG2FApw60AeElZqg%2F0TIotlg%2FLPGYwsm53%2FUc%2BPpwUMtpkbUZJ9eQOTwyztxBLMR88p2lDaEZejJHhRt8Ta2t011%2Bb4SQDbRMCm0xmP6BeAP5VjCReB4XG6RfbIH9U7Cswdz2K2DcbRsdR0Zry7hsMFEm0DzJ0tjsteuHmhs6qwCm8Vxp08FhZefEMYVkCUzZAuCJIu4IbnLG5GxNQna9RGXb95MjDQFJ4StIjHqse%2BR%2BUWhe%2FYnGI6DQ5qyWp3y9oBMEVRI0nuxTb68%2FXQEUrTDYUHjEpmATxrX3aovz4VH3jEsMqSirxZkyz2za3XM04DPHynYyMB8WY5prQS9AAr0NDg0rwawW18IZD%2Fm14knclpYJwEw1q3qkQY6swJX5wqXEVNulH%2FtQKHRiMQUnyO7omlkhw5z9CWkRO0095%2BHaU%2F%2FgU9qb3Iv5WHK%2B1gJvAiT3spu4MyKQmAOeIHuBNTInXUMKI5W2NOIVw9EL1Q%2FHyB2LIj88qJQrxETLPCWtoBRNkUe5X%2BdXu9QZnvF1E4NW1tG981U1xhSTTK9yj0NhoUNUbHrF84wBStlpl5DBUqf6TnoFYk%2By1QXG9t5W4iD72yf5ymu7ge72vsmi1FBTvTmLSzSKuBrBa2SyK6Lj36M1KEMoY34xbd4zBuS8sePKNX6H%2FWV6AC5dbAze5sz06DF14WL%2BUXisoJL56sEbGaC5Xi0lz%2FutwhFBglF7RF73P3PhDxxNtia%2FlURfhVz%2B4G5XE7weMKLpwR61t%2BQcf4pfzO7XM%2FGn%2Ball1xkAaA4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220323T122120Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASGZ3OOQ3OQGBBWIP%2F20220323%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=c508a2e6ef69151fc1c3f9a43c852559187dad9002e97a6d98bb35e884ee955b"
  // );

  return <primitive object={scene} />;
}

export default function App() {
  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      dpr={window.devicePixelRatio}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
          <Model />
        </ARMarker>
      </Suspense>
      <OrbitControls />
    </ARCanvas>
  );
}
