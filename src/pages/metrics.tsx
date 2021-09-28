import { setupAPIClient } from "../services/api"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Metrics() {

  return (
    <>
      <h1>Metrics</h1>
    </>)
}

export const geServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')



  return {
    props: {

    }
  }
})