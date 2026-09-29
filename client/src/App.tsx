import { Route, Switch } from "wouter";
import MimoSaaSHome from "@/mimosaas/home";
import PrivacyPolicy from "@/mimosaas/privacy";

export default function App() {
  return (
    <Switch>
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={MimoSaaSHome} />
    </Switch>
  );
}
