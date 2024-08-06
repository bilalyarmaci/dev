import CommandsAndQueries from "./CommandsAndQueries";
import Response from "./Response";

export default function ResponsesAndCommands() {
  return (
    <div className="grid h-full grid-cols-3 gap-4">
      <div className="col-span-2 flex h-full flex-col rounded-lg border">
        <div className="flex flex-col overflow-y-auto p-2">
          <Response
            index={"1"}
            type={{ value: "Event", service: "Service 1", topic: "Topic 2" }}
            json={myJson}
          />
          <Response index={"2"} type={{ value: "Query" }} />
          <Response index={"2"} type={{ value: "Query" }} />
          <Response index={"2"} type={{ value: "Query" }} />
        </div>
      </div>
      <CommandsAndQueries />
    </div>
  );
}

const myJson = {
  value: "deneme",
  type: "k1.v0.1.3",
  content: "mg1.22",
  ipsum:
    "Voluptates consequuntur voluptatem asperiores, delectus sapiente earum tempora illum ducimus eum, aliquid reiciendis maiores.",
  lorem:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at dolor commodi expedita quas et voluptates? Repellendus molestias alias totam possimus! Veniam odio distinctio perspiciatis quas quaerat tempore quod fuga! Error rem asperiores quidem facere nemo doloribus cum saepe laboriosam laudantium ad, perspiciatis consequatur dolore fugiat eaque ducimus earum voluptas est magni ipsum modi reprehenderit sint at, repudiandae numquam. Maxime.",
  lomre:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem totam praesentium quia quae, saepe, error itaque omnis cupiditate at sequi vel dignissimos, ducimus inventore tempora aut. Nam, nostrum perferendis. Animi veritatis sunt labore expedita voluptate, pariatur beatae dolorem dolorum voluptas! Aliquam suscipit est qui doloremque repellendus pariatur natus culpa aut minima placeat? Nesciunt officia earum hic neque ea voluptas. Qui voluptate illum, perspiciatis cumque, ex placeat facere nisi incidunt itaque iusto accusantium exercitationem adipisci, laudantium in porro. Facere, praesentium eaque atque laborum cum doloremque sapiente doloribus placeat libero harum! Autem, accusantium praesentium officiis aspernatur quo deserunt magnam, iste doloremque repellat odit unde ducimus debitis nemo reiciendis perspiciatis veritatis quisquam at ea non repellendus, exercitationem quia id. Explicabo, praesentium incidunt. Soluta pariatur minus nam vel iusto libero vitae neque fugit excepturi labore doloremque, vero iste cumque nostrum debitis exercitationem maxime. Ipsum pariatur rerum consequatur fugit eum molestias quis aliquam ullam.",
};
