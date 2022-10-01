/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "files.readMetadata", input: LibraryArgs<number>, result: null } | 
        { key: "getNode", input: never, result: NodeState } | 
        { key: "jobs.getHistory", input: LibraryArgs<null>, result: Array<JobReport> } | 
        { key: "jobs.getRunning", input: LibraryArgs<null>, result: Array<JobReport> } | 
        { key: "library.getStatistics", input: LibraryArgs<null>, result: Statistics } | 
        { key: "library.list", input: never, result: Array<LibraryConfigWrapped> } | 
        { key: "locations.getById", input: LibraryArgs<number>, result: Location | null } | 
        { key: "locations.getExplorerData", input: LibraryArgs<LocationExplorerArgs>, result: ExplorerData } | 
        { key: "locations.indexer_rules.get", input: LibraryArgs<number>, result: IndexerRule } | 
        { key: "locations.indexer_rules.list", input: LibraryArgs<null>, result: Array<IndexerRule> } | 
        { key: "locations.list", input: LibraryArgs<null>, result: Array<{ id: number, pub_id: Array<number>, node_id: number, name: string | null, local_path: string | null, total_capacity: number | null, available_capacity: number | null, filesystem: string | null, disk_type: number | null, is_removable: boolean | null, is_online: boolean, is_archived: boolean, date_created: string, node: Node }> } | 
        { key: "tags.get", input: LibraryArgs<number>, result: Tag | null } | 
        { key: "tags.getExplorerData", input: LibraryArgs<number>, result: ExplorerData } | 
        { key: "tags.getForFile", input: LibraryArgs<number>, result: Array<Tag> } | 
        { key: "tags.list", input: LibraryArgs<null>, result: Array<Tag> } | 
        { key: "version", input: never, result: string } | 
        { key: "volumes.list", input: never, result: Array<Volume> },
    mutations: 
        { key: "files.delete", input: LibraryArgs<number>, result: null } | 
        { key: "files.setFavorite", input: LibraryArgs<SetFavoriteArgs>, result: null } | 
        { key: "files.setNote", input: LibraryArgs<SetNoteArgs>, result: null } | 
        { key: "jobs.generateThumbsForLocation", input: LibraryArgs<GenerateThumbsForLocationArgs>, result: null } | 
        { key: "jobs.identifyUniqueFiles", input: LibraryArgs<IdentifyUniqueFilesArgs>, result: null } | 
        { key: "library.create", input: string, result: LibraryConfigWrapped } | 
        { key: "library.delete", input: string, result: null } | 
        { key: "library.edit", input: EditLibraryArgs, result: null } | 
        { key: "locations.create", input: LibraryArgs<LocationCreateArgs>, result: null } | 
        { key: "locations.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.fullRescan", input: LibraryArgs<number>, result: null } | 
        { key: "locations.indexer_rules.create", input: LibraryArgs<IndexerRuleCreateArgs>, result: IndexerRule } | 
        { key: "locations.indexer_rules.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.quickRescan", input: LibraryArgs<null>, result: null } | 
        { key: "locations.update", input: LibraryArgs<LocationUpdateArgs>, result: null } | 
        { key: "tags.assign", input: LibraryArgs<TagAssignArgs>, result: null } | 
        { key: "tags.create", input: LibraryArgs<TagCreateArgs>, result: Tag } | 
        { key: "tags.delete", input: LibraryArgs<number>, result: null } | 
        { key: "tags.update", input: LibraryArgs<TagUpdateArgs>, result: null },
    subscriptions: 
        { key: "invalidateQuery", input: never, result: InvalidateOperationEvent } | 
        { key: "jobs.newThumbnail", input: LibraryArgs<null>, result: string }
};

export interface ConfigMetadata { version: string | null }

export interface EditLibraryArgs { id: string, name: string | null, description: string | null }

export type ExplorerContext = { type: "Location" } & Location | { type: "Tag" } & Tag

export interface ExplorerData { context: ExplorerContext, items: Array<ExplorerItem> }

export type ExplorerItem = { type: "Path" } & { id: number, is_dir: boolean, location_id: number, materialized_path: string, name: string, extension: string | null, file_id: number | null, parent_id: number | null, key_id: number | null, date_created: string, date_modified: string, date_indexed: string, file: File | null } | { type: "Object" } & { id: number, cas_id: string, integrity_checksum: string | null, name: string | null, extension: string | null, kind: number, size_in_bytes: string, key_id: number | null, hidden: boolean, favorite: boolean, important: boolean, has_thumbnail: boolean, has_thumbstrip: boolean, has_video_preview: boolean, ipfs_id: string | null, note: string | null, date_created: string, date_modified: string, date_indexed: string, paths: Array<FilePath> }

export interface File { id: number, cas_id: string, integrity_checksum: string | null, name: string | null, extension: string | null, kind: number, size_in_bytes: string, key_id: number | null, hidden: boolean, favorite: boolean, important: boolean, has_thumbnail: boolean, has_thumbstrip: boolean, has_video_preview: boolean, ipfs_id: string | null, note: string | null, date_created: string, date_modified: string, date_indexed: string }

export interface FilePath { id: number, is_dir: boolean, location_id: number, materialized_path: string, name: string, extension: string | null, file_id: number | null, parent_id: number | null, key_id: number | null, date_created: string, date_modified: string, date_indexed: string }

export interface GenerateThumbsForLocationArgs { id: number, path: string }

export interface IdentifyUniqueFilesArgs { id: number, path: string }

export interface IndexerRule { id: number, kind: number, name: string, parameters: Array<number>, date_created: string, date_modified: string }

export interface IndexerRuleCreateArgs { kind: RuleKind, name: string, parameters: Array<number> }

export interface InvalidateOperationEvent { key: string, arg: any }

export interface JobReport { id: string, name: string, data: Array<number> | null, metadata: any | null, date_created: string, date_modified: string, status: JobStatus, task_count: number, completed_task_count: number, message: string, seconds_elapsed: number }

export type JobStatus = "Queued" | "Running" | "Completed" | "Canceled" | "Failed" | "Paused"

export interface LibraryArgs<T> { library_id: string, arg: T }

export interface LibraryConfig { version: string | null, name: string, description: string }

export interface LibraryConfigWrapped { uuid: string, config: LibraryConfig }

export interface Location { id: number, pub_id: Array<number>, node_id: number, name: string | null, local_path: string | null, total_capacity: number | null, available_capacity: number | null, filesystem: string | null, disk_type: number | null, is_removable: boolean | null, is_online: boolean, is_archived: boolean, date_created: string }

export interface LocationCreateArgs { path: string, indexer_rules_ids: Array<number> }

export interface LocationExplorerArgs { location_id: number, path: string, limit: number, cursor: string | null }

export interface LocationUpdateArgs { id: number, name: string | null, indexer_rules_ids: Array<number> }

export interface Node { id: number, pub_id: Array<number>, name: string, platform: number, version: string | null, last_seen: string, timezone: string | null, date_created: string }

export interface NodeConfig { version: string | null, id: string, name: string, p2p_port: number | null }

export interface NodeState { version: string | null, id: string, name: string, p2p_port: number | null, data_path: string }

export type RuleKind = "AcceptFilesByGlob" | "RejectFilesByGlob" | "AcceptIfChildrenDirectoriesArePresent" | "RejectIfChildrenDirectoriesArePresent"

export interface SetFavoriteArgs { id: number, favorite: boolean }

export interface SetNoteArgs { id: number, note: string | null }

export interface Statistics { id: number, date_captured: string, total_file_count: number, library_db_size: string, total_bytes_used: string, total_bytes_capacity: string, total_unique_bytes: string, total_bytes_free: string, preview_media_bytes: string }

export interface Tag { id: number, pub_id: Array<number>, name: string | null, color: string | null, total_files: number | null, redundancy_goal: number | null, date_created: string, date_modified: string }

export interface TagAssignArgs { file_id: number, tag_id: number, unassign: boolean }

export interface TagCreateArgs { name: string, color: string }

export interface TagUpdateArgs { id: number, name: string | null, color: string | null }

export interface Volume { name: string, mount_point: string, total_capacity: bigint, available_capacity: bigint, is_removable: boolean, disk_type: string | null, file_system: string | null, is_root_filesystem: boolean }
