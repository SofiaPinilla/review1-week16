module.exports = {
    paths: {
        "/": {
            get: {
                tags: {
                    Tasks: "Get Tasks",
                },
                description: "Get tasks",
                operationId: "getTasks",
                parameters: [],
                responses: {
                    200: {
                        description: "Tasks were obtained",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/task",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/create": {
            post: {
                tags: {
                    Tasks: "Post Task",
                },
                description: "Post tasks",
                operationId: "postTask",
                parameters: [],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created",
                    },
                },
            },
        },
        "/id/{_id}": {
            get: {
                summary: "Get Task By Id",
                operationId: "getTaskById",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id",
                    },
                    description: "Id of Task",
                }, ],
                responses: {
                    200: {
                        description: "Task found successfully",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/task" },
                            },
                        },
                    },
                    404: { description: "Task not found" },
                    500: { description: "Server error" },
                },
            },
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update Task",
                operationId: "updateTask",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id",
                    },
                    description: "Id of Task to be updated",
                }, ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/TaskInput" },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    404: { description: "Task not found" },
                    500: { description: "Server error" },
                },
            },
            delete: {
                tags: {
                    Tasks: "Delete a task",
                },
                description: "Deleting a Task",
                operationId: "deleteTask",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id",
                    },
                    description: "Deleting a done Task",
                }, ],
                responses: {
                    200: { description: "Task deleted successfully" },
                    404: { description: "Task not found" },
                    500: { description: "Server error" },
                },
            },

        },
        "/markAsCompleted/{_id}": {
            put: {
                summary: "Mark task as updated",
                operationId: "markAsCompleted",
                parameters: [{
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id",
                    },
                    description: "Marked task as completed",
                }, ],
                responses: {
                    200: { description: "Task marked as completed successfully" },
                    404: { description: "Task not found" },
                    500: { description: "Server error" },
                },
            }
        }
    },
};